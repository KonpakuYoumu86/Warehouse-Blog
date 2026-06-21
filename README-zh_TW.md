# Warehouse-Blog

English | [簡體中文](./README-zh_CN.md) | [繁體中文](./README-zh_TW.md)

這是一個支援使用者資料、專案展示、留言板與友鏈的自架倉庫部落格系統，前端可靜態部署，後端使用本地 C 服務與 SQLite。

這是一個適合公開發布的自架模板，分成前端與後端兩部分：

- 前端：任意靜態託管或 CDN
- 後端：透過你自己的代理、反向代理或隧道暴露的本地 C 服務
- 資料：本地 SQLite、匯出的 JSON 鏡像與本地頭像檔案

## 語言支援

公開前端支援三種語言：

- English
- 簡體中文
- 繁體中文

頁面頂部提供語言切換入口，訪客可在三種版本之間切換。

## 發布說明

本版本已完成公開發布清理：

- 移除了專案相關的 tunnel UUID、主機名稱與本地路徑
- 移除了個人管理員資料，並替換為模板值
- 將公開範例網域替換成占位符
- 將示範管理員憑證替換成通用初始值，首次部署後請立即修改

## 上游署名

本倉庫源自 `LinusTrevian` 的原始專案。
上游專案與作者署名已保留在站點的 “About” 頁面中，並繼續保留於本公開版。

## 目錄

- `web/` 靜態前端檔案
- `backend/` C 後端（`libmicrohttpd` + `sqlite3` + `jansson` + `curl` + `openssl`）
- `data/warehouse-blog.sqlite3` 本地 SQLite 資料庫
- `data/export/site-state.json` JSON 匯出鏡像
- `data/uploads/avatars/` 本地頭像檔案
- `tools/api_health_logger.py` 健康檢查 / 日誌輔助腳本
- `backend/deploy/cloudflared/config.api.example.yml` 隧道範例設定

## 相依套件

### Fedora 43

```bash
sudo dnf install -y gcc make pkgconf-pkg-config unzip curl ca-certificates   libmicrohttpd-devel sqlite-devel jansson-devel libcurl-devel openssl-devel python3
```

### Debian 13

```bash
sudo apt-get update
sudo apt-get install -y build-essential pkg-config unzip curl ca-certificates   libmicrohttpd-dev libsqlite3-dev libjansson-dev libcurl4-openssl-dev libssl-dev python3
```

## 建置

```bash
cd backend
make
cd ..
```

## 本機執行後端

```bash
cp ./backend/scripts/server.env.example ./backend/scripts/server.env
set -a
source ./backend/scripts/server.env
set +a
./backend/warehouse-blog-server
```

## 前端 API 設定

前端 API 基址的解析順序如下：

1. `window.WAREHOUSE_API_BASE`
2. 根節點上的 `data-api-base`
3. `localhost` / `IP` 時使用同源
4. 預設占位符：`https://your-api-domain.example`

上線前請把占位符替換成你自己的 API 來源位址。

## 前端託管

把 `web/` 目錄的內容上傳到你的靜態託管平台即可。

## 直接透過 Nginx 部署

這個專案也可以不經過隧道，直接在伺服器上提供服務。

建議架構：

- 公網站點：你自己的公開網域
- 本地後端：`http://127.0.0.1:8080`
- 資料共用：同一份 SQLite 資料庫與上傳目錄

部署範例：

```bash
bash ./deploy_nginx.sh --domain your-site.example
sudo certbot --nginx -d your-site.example
```

或者讓腳本自動跑 certbot：

```bash
bash ./deploy_nginx.sh --domain your-site.example --certbot
```

後續更新：

```bash
bash ./update_dual_sites.sh your-site.example
```

## 透過隧道暴露本機 API

1. 安裝 `cloudflared`
2. `cloudflared tunnel login`
3. `cloudflared tunnel create your-blog-api`
4. 將 `your-api-domain.example` 綁定到該 tunnel
5. 使用 `backend/deploy/cloudflared/config.api.example.yml`

範例：

```bash
cloudflared tunnel route dns your-blog-api your-api-domain.example
cloudflared --config ~/.cloudflared/config.yml tunnel run your-blog-api
```

## Cookie / CORS 注意事項

- 本機 HTTP 測試時設定 `WB_COOKIE_SECURE=0`
- 正式 HTTPS 時改成 `WB_COOKIE_SECURE=1`
- `WB_ALLOWED_ORIGINS` 只保留你真實的前端來源
- 除非你明確知道後果，否則保持 `WB_COOKIE_DOMAIN=''`

## 郵件驗證

註冊需要 6 位數郵件驗證碼。公開註冊前請先設定 SMTP：

```bash
WB_SMTP_URL='smtps://smtp.example.com:465'
WB_SMTP_USERNAME='smtp-user'
WB_SMTP_PASSWORD='smtp-password'
WB_SMTP_FROM='no-reply@example.com'
WB_SMTP_FROM_NAME='Warehouse-Blog'
```

## 輔助日誌腳本

```bash
python3 ./tools/api_health_logger.py   --local http://127.0.0.1:8080/api/health   --public https://your-api-domain.example/api/health   --profile https://your-api-domain.example/api/site-profile?lang=en
```

日誌預設寫入 `./logs/api-health.log`。
