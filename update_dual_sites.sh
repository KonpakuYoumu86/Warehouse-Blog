#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${1:-thdeb.bbroot.com}"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "${REPO_DIR}"

git pull --ff-only origin main
bash "${REPO_DIR}/deploy_nginx.sh" --domain "${DOMAIN}" --skip-nginx

if command -v systemctl >/dev/null 2>&1; then
  sudo systemctl reload nginx >/dev/null 2>&1 || true
fi

echo "Local Nginx site updated: https://${DOMAIN}/"
echo "Cloudflare Pages should update thdeb.us.ci from the same GitHub main branch."
