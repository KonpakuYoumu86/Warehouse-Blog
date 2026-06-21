#!/usr/bin/env bash
set -euo pipefail
sudo dnf install -y \
  gcc make pkgconf-pkg-config unzip curl ca-certificates \
  libmicrohttpd-devel sqlite-devel jansson-devel \
  libcurl-devel openssl-devel
