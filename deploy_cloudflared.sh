#!/usr/bin/env bash
set -u

# Cloudflare Tunnel deploy helper for local self-hosted site
# Designed for Fedora / Debian-like Linux systems
#
# What it does:
# 1) validates cloudflared installation
# 2) validates local origin service is reachable
# 3) validates tunnel credential JSON exists
# 4) writes ~/.cloudflared/config.yml
# 5) optionally tries to create/update DNS route
# 6) can run tunnel in foreground, or install/start as systemd service
#
# Usage examples:
#   bash deploy_cloudflared.sh \
#     --tunnel-name your-blog-tunnel \
#     --tunnel-id YOUR-TUNNEL-UUID \
#     --hostname your-domain.example \
#     --service http://IP:8080 \
#     --run
#
#   bash deploy_cloudflared.sh \
#     --tunnel-name your-blog-tunnel \
#     --tunnel-id YOUR-TUNNEL-UUID \
#     --hostname your-domain.example \
#     --service http://IP:8080 \
#     --route-dns \
#     --install-service

COLOR_RED='\033[1;31m'
COLOR_GREEN='\033[1;32m'
COLOR_YELLOW='\033[1;33m'
COLOR_BLUE='\033[1;34m'
COLOR_RESET='\033[0m'

TUNNEL_NAME=""
TUNNEL_ID=""
HOSTNAME_TO_ROUTE=""
SERVICE_URL="http://IP:8080"
CF_DIR="${HOME}/.cloudflared"
CONFIG_PATH="${CF_DIR}/config.yml"
CRED_PATH=""
DO_ROUTE_DNS=0
DO_RUN=0
DO_INSTALL_SERVICE=0
SKIP_LOCAL_CHECK=0

log() {
  printf "%b[INFO]%b %s\n" "${COLOR_BLUE}" "${COLOR_RESET}" "$*"
}

ok() {
  printf "%b[ OK ]%b %s\n" "${COLOR_GREEN}" "${COLOR_RESET}" "$*"
}

warn() {
  printf "%b[WARN]%b %s\n" "${COLOR_YELLOW}" "${COLOR_RESET}" "$*"
}

fail() {
  printf "%b[FAIL]%b %s\n" "${COLOR_RED}" "${COLOR_RESET}" "$*" >&2
  exit 1
}

usage() {
  cat <<'EOF'
Usage:
  bash deploy_cloudflared.sh [options]

Required:
  --tunnel-name NAME        Existing tunnel name, e.g. your-blog-tunnel
  --tunnel-id UUID          Tunnel UUID, e.g. YOUR-TUNNEL-UUID
  --hostname HOST           Public hostname, e.g. your-domain.example
Optional:
  --service URL             Local origin service URL. Default: http://IP:8080
  --config PATH             Config output path. Default: ~/.cloudflared/config.yml
  --cred PATH               Tunnel credential json path. Default: ~/.cloudflared/<UUID>.json
  --route-dns               Try to create the DNS route with cloudflared tunnel route dns
  --run                     Run cloudflared tunnel in foreground after writing config
  --install-service         Install and start cloudflared as a systemd service
  --skip-local-check        Skip curl health check against local origin
  -h, --help                Show this help

Examples:
  bash deploy_cloudflared.sh \
    --tunnel-name your-blog-tunnel \
    --tunnel-id YOUR-TUNNEL-UUID \
    --hostname your-domain.example \
    --service http://IP:8080 \
    --run

  bash deploy_cloudflared.sh \
    --tunnel-name your-blog-tunnel \
    --tunnel-id YOUR-TUNNEL-UUID \
    --hostname your-domain.example \
    --route-dns \
    --install-service
EOF
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fail "缺少命令: $1"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --tunnel-name) TUNNEL_NAME="${2:-}"; shift 2 ;;
    --tunnel-id) TUNNEL_ID="${2:-}"; shift 2 ;;
    --hostname) HOSTNAME_TO_ROUTE="${2:-}"; shift 2 ;;
    --service) SERVICE_URL="${2:-}"; shift 2 ;;
    --config) CONFIG_PATH="${2:-}"; shift 2 ;;
    --cred) CRED_PATH="${2:-}"; shift 2 ;;
    --route-dns) DO_ROUTE_DNS=1; shift ;;
    --run) DO_RUN=1; shift ;;
    --install-service) DO_INSTALL_SERVICE=1; shift ;;
    --skip-local-check) SKIP_LOCAL_CHECK=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *) fail "未知参数: $1" ;;
  esac
done

[[ -n "${TUNNEL_NAME}" ]] || fail "缺少 --tunnel-name"
[[ -n "${TUNNEL_ID}" ]] || fail "缺少 --tunnel-id"
[[ -n "${HOSTNAME_TO_ROUTE}" ]] || fail "缺少 --hostname"

if [[ -z "${CRED_PATH}" ]]; then
  CRED_PATH="${CF_DIR}/${TUNNEL_ID}.json"
fi

need_cmd cloudflared
need_cmd curl

log "检查 cloudflared 版本..."
cloudflared --version || fail "cloudflared 无法执行"
ok "cloudflared 可用"

if [[ ! -f "${CF_DIR}/cert.pem" ]]; then
  fail "未找到 ${CF_DIR}/cert.pem。请先执行: cloudflared tunnel login"
fi
ok "找到 cert.pem"

if [[ ! -f "${CRED_PATH}" ]]; then
  fail "未找到 tunnel 凭据文件: ${CRED_PATH}。请确认 tunnel 已创建，并且 UUID 正确。"
fi
ok "找到 tunnel 凭据 JSON: ${CRED_PATH}"

log "检查 tunnel 是否存在于当前账号..."
if ! cloudflared tunnel list | grep -Fq "${TUNNEL_ID}"; then
  fail "cloudflared tunnel list 中未找到该 UUID: ${TUNNEL_ID}"
fi
ok "该 tunnel UUID 已存在"

if [[ "${SKIP_LOCAL_CHECK}" -eq 0 ]]; then
  log "检查本地服务: ${SERVICE_URL}"
  if ! curl -fsS -I "${SERVICE_URL}" >/dev/null 2>&1; then
    fail "本地服务不可达: ${SERVICE_URL}。请先确保你的站点后端已经在监听。"
  fi
  ok "本地服务可达: ${SERVICE_URL}"
else
  warn "已跳过本地服务检查"
fi

mkdir -p "$(dirname "${CONFIG_PATH}")" || fail "无法创建配置目录: $(dirname "${CONFIG_PATH}")"

log "写入 cloudflared 配置: ${CONFIG_PATH}"
cat > "${CONFIG_PATH}" <<EOF
tunnel: ${TUNNEL_ID}
credentials-file: ${CRED_PATH}

ingress:
  - hostname: ${HOSTNAME_TO_ROUTE}
    service: ${SERVICE_URL}
  - service: http_status:404
EOF
ok "config.yml 已写入"

if [[ "${DO_ROUTE_DNS}" -eq 1 ]]; then
  log "尝试创建 DNS 路由: ${HOSTNAME_TO_ROUTE}"
  set +e
  ROUTE_OUT="$(cloudflared tunnel route dns "${TUNNEL_NAME}" "${HOSTNAME_TO_ROUTE}" 2>&1)"
  ROUTE_CODE=$?
  set -e
  printf "%s\n" "${ROUTE_OUT}"
  if [[ ${ROUTE_CODE} -ne 0 ]]; then
    if printf "%s" "${ROUTE_OUT}" | grep -qi "already exists"; then
      warn "DNS 记录已存在。请去 Cloudflare DNS 面板检查并删除/修改冲突记录后重试。"
    fi
    fail "创建 DNS 路由失败"
  fi
  ok "DNS 路由创建成功"
else
  warn "已跳过 route dns 步骤"
fi

log "回显当前配置文件:"
printf '%s\n' "----------------------------------------"
cat "${CONFIG_PATH}"
printf '%s\n' "----------------------------------------"

if [[ "${DO_INSTALL_SERVICE}" -eq 1 ]]; then
  need_cmd systemctl
  log "安装 cloudflared systemd 服务..."
  set +e
  INSTALL_OUT="$(sudo cloudflared --config "${CONFIG_PATH}" service install 2>&1)"
  INSTALL_CODE=$?
  set -e
  printf "%s\n" "${INSTALL_OUT}"
  if [[ ${INSTALL_CODE} -ne 0 ]]; then
    fail "cloudflared service install 失败"
  fi

  log "启动 cloudflared systemd 服务..."
  sudo systemctl enable --now cloudflared || fail "systemctl enable/start cloudflared 失败"

  log "当前 cloudflared 服务状态:"
  sudo systemctl --no-pager --full status cloudflared || fail "无法获取 cloudflared 服务状态"
  ok "cloudflared 服务已安装并启动"
elif [[ "${DO_RUN}" -eq 1 ]]; then
  log "前台运行 tunnel。按 Ctrl+C 可停止。"
  exec cloudflared --config "${CONFIG_PATH}" tunnel run "${TUNNEL_NAME}"
else
  ok "脚本执行完成。你现在可以手动运行："
  printf "  cloudflared --config '%s' tunnel run '%s'\n" "${CONFIG_PATH}" "${TUNNEL_NAME}"
fi
