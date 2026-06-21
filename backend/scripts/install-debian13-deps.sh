#!/usr/bin/env bash
set -euo pipefail
sudo apt-get update
sudo apt-get install -y \
  build-essential pkg-config unzip curl ca-certificates \
  libmicrohttpd-dev libsqlite3-dev libjansson-dev \
  libcurl4-openssl-dev libssl-dev
