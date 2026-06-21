#!/usr/bin/env bash
set -euo pipefail

DOMAIN="thdeb.bbroot.com"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_HOST="127.0.0.1"
BACKEND_PORT="8080"
RUN_CERTBOT=0
SKIP_NGINX=0

usage() {
  cat <<'EOF'
Usage:
  bash deploy_nginx.sh [options]

Options:
  --domain NAME       Public domain. Default: thdeb.bbroot.com
  --port PORT         Local backend port. Default: 8080
  --certbot          Run certbot --nginx for HTTPS after nginx is configured
  --skip-nginx       Only build/restart backend and write server.env
  -h, --help         Show this help

This deploys:
  Nginx public site: https://thdeb.bbroot.com
  Local backend:     http://127.0.0.1:8080
  Existing Cloudflare site thdeb.us.ci can keep using api.thdeb.us.ci.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --domain) DOMAIN="${2:-}"; shift 2 ;;
    --port) BACKEND_PORT="${2:-}"; shift 2 ;;
    --certbot) RUN_CERTBOT=1; shift ;;
    --skip-nginx) SKIP_NGINX=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage; exit 1 ;;
  esac
done

if [[ -z "${DOMAIN}" ]]; then
  echo "Domain cannot be empty." >&2
  exit 1
fi

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Missing command: $1" >&2
    exit 1
  }
}

set_env_value() {
  local key="$1"
  local value="$2"
  local file="$3"
  if grep -q "^${key}=" "${file}"; then
    if [[ -w "${file}" ]]; then
      sed -i "s|^${key}=.*|${key}=${value}|" "${file}"
    else
      sudo sed -i "s|^${key}=.*|${key}=${value}|" "${file}"
    fi
  else
    if [[ -w "${file}" ]]; then
      printf '%s=%s\n' "${key}" "${value}" >> "${file}"
    else
      printf '%s=%s\n' "${key}" "${value}" | sudo tee -a "${file}" >/dev/null
    fi
  fi
}

need_cmd make
need_cmd curl
need_cmd sudo
need_cmd systemctl

echo "[1/6] Building backend"
make -C "${REPO_DIR}/backend"

echo "[2/6] Writing backend environment"
ENV_FILE="${REPO_DIR}/backend/scripts/server.env"
if [[ ! -f "${ENV_FILE}" ]]; then
  cp "${REPO_DIR}/backend/scripts/server.env.example" "${ENV_FILE}"
fi
set_env_value "WB_BIND" "${BACKEND_HOST}" "${ENV_FILE}"
set_env_value "WB_PORT" "${BACKEND_PORT}" "${ENV_FILE}"
set_env_value "WB_WEB_ROOT" "${REPO_DIR}/web" "${ENV_FILE}"
set_env_value "WB_UPLOADS_ROOT" "${REPO_DIR}/data/uploads/avatars" "${ENV_FILE}"
set_env_value "WB_EXPORT_JSON" "${REPO_DIR}/data/export/site-state.json" "${ENV_FILE}"
set_env_value "WB_SCHEMA_PATH" "${REPO_DIR}/backend/sql/schema.sql" "${ENV_FILE}"
set_env_value "WB_ADMIN_SEED_PATH" "${REPO_DIR}/data/admin-seed.json" "${ENV_FILE}"
set_env_value "WB_DB_PATH" "${REPO_DIR}/data/warehouse-blog.sqlite3" "${ENV_FILE}"
set_env_value "WB_ALLOWED_ORIGINS" "'https://${DOMAIN},https://thdeb.us.ci,http://${BACKEND_HOST}:${BACKEND_PORT},http://localhost:${BACKEND_PORT}'" "${ENV_FILE}"
set_env_value "WB_COOKIE_DOMAIN" "''" "${ENV_FILE}"
set_env_value "WB_COOKIE_SECURE" "1" "${ENV_FILE}"

echo "[3/6] Installing systemd backend service"
SERVICE_FILE="/etc/systemd/system/warehouse-blog.service"
sudo tee "${SERVICE_FILE}" >/dev/null <<EOF
[Unit]
    Description=Warehouse-Blog backend
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=${REPO_DIR}
EnvironmentFile=${ENV_FILE}
ExecStart=${REPO_DIR}/backend/warehouse-blog-server
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now warehouse-blog
sudo systemctl restart warehouse-blog

echo "[4/6] Checking local backend"
curl -fsS "http://${BACKEND_HOST}:${BACKEND_PORT}/api/health" >/dev/null

if [[ "${SKIP_NGINX}" -eq 0 ]]; then
  need_cmd nginx

  echo "[5/6] Installing nginx site for ${DOMAIN}"
  TMP_CONF="$(mktemp)"
  sed \
    -e "s|server_name thdeb.bbroot.com;|server_name ${DOMAIN};|" \
    -e "s|root /opt/warehouse-blog/web;|root ${REPO_DIR}/web;|" \
    -e "s|http://127.0.0.1:8080|http://${BACKEND_HOST}:${BACKEND_PORT}|g" \
    "${REPO_DIR}/backend/deploy/nginx/thdeb.bbroot.com.conf" > "${TMP_CONF}"

  if [[ -d /etc/nginx/sites-available ]]; then
    sudo cp "${TMP_CONF}" "/etc/nginx/sites-available/${DOMAIN}.conf"
    sudo ln -sfn "/etc/nginx/sites-available/${DOMAIN}.conf" "/etc/nginx/sites-enabled/${DOMAIN}.conf"
  else
    sudo cp "${TMP_CONF}" "/etc/nginx/conf.d/${DOMAIN}.conf"
  fi
  rm -f "${TMP_CONF}"

  sudo nginx -t
  sudo systemctl enable --now nginx
  sudo systemctl reload nginx

  if [[ "${RUN_CERTBOT}" -eq 1 ]]; then
    need_cmd certbot
    echo "[6/6] Requesting HTTPS certificate with certbot"
    if certbot plugins 2>/dev/null | grep -q '^* nginx$'; then
      sudo certbot --nginx -d "${DOMAIN}"
      sudo nginx -t
      sudo systemctl reload nginx
    else
      echo "certbot nginx plugin is not installed."
      echo "Install it, then rerun:"
      echo "  Fedora: sudo dnf install -y python3-certbot-nginx"
      echo "  Debian: sudo apt-get install -y python3-certbot-nginx"
      echo "Then run:"
      echo "  sudo certbot --nginx -d ${DOMAIN}"
      exit 1
    fi
  else
    echo "[6/6] Skipping certbot. Run this when DNS points to this server:"
    echo "      sudo certbot --nginx -d ${DOMAIN}"
  fi
else
  echo "[5/6] Skipping nginx install"
  echo "[6/6] Done"
fi

echo "Deployment checks:"
echo "  Local API: curl -fsS http://${BACKEND_HOST}:${BACKEND_PORT}/api/health"
echo "  Public site after DNS/HTTPS: https://${DOMAIN}/"
