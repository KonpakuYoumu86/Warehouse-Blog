# Warehouse-Blog

English | [简体中文](./README-zh_CN.md) | [繁體中文](./README-zh_TW.md)

一个支持用户资料、项目展示、留言板与友链的自托管仓库博客系统，前端可静态部署，后端使用本地 C 服务与 SQLite。

这是一个适合公开发布的自托管模板，分为前端和后端两部分：

- 前端：任意静态托管或 CDN
- 后端：通过你自己的代理、反向代理或隧道暴露的本地 C 服务
- 数据：本地 SQLite、导出的 JSON 镜像和本地头像文件

## 语言支持

公开前端支持三种语言：

- English
- 简体中文
- 繁體中文

页面顶部提供语言切换入口，访客可以在三种版本之间切换。

## 发布说明

本版本已经做过公开发布清理：

- 移除了项目相关的隧道 UUID、主机名和本地路径
- 移除了个人管理员数据，并替换为模板值
- 将公开示例域名替换为占位符
- 将示例管理员凭据替换为通用初始值，首次部署后请立即修改

## 上游署名

本仓库源自 `LinusTrevian` 的原始项目。
上游项目与作者署名已保留在站点的“About”页面中，并继续保留在本公开版里。

## 目录

- `web/` 静态前端文件
- `backend/` C 后端（`libmicrohttpd` + `sqlite3` + `jansson` + `curl` + `openssl`）
- `data/warehouse-blog.sqlite3` 本地 SQLite 数据库
- `data/export/site-state.json` JSON 导出镜像
- `data/uploads/avatars/` 本地头像文件
- `tools/api_health_logger.py` 健康检查 / 日志辅助脚本
- `backend/deploy/cloudflared/config.api.example.yml` 隧道示例配置

## 依赖

### Fedora 43

```bash
sudo dnf install -y gcc make pkgconf-pkg-config unzip curl ca-certificates   libmicrohttpd-devel sqlite-devel jansson-devel libcurl-devel openssl-devel python3
```

### Debian 13

```bash
sudo apt-get update
sudo apt-get install -y build-essential pkg-config unzip curl ca-certificates   libmicrohttpd-dev libsqlite3-dev libjansson-dev libcurl4-openssl-dev libssl-dev python3
```

## 构建

```bash
cd backend
make
cd ..
```

## 本地运行后端

```bash
cp ./backend/scripts/server.env.example ./backend/scripts/server.env
set -a
source ./backend/scripts/server.env
set +a
./backend/warehouse-blog-server
```

## 前端 API 配置

前端 API 基址的解析顺序如下：

1. `window.WAREHOUSE_API_BASE`
2. 根节点上的 `data-api-base`
3. `localhost` / `IP` 时使用同源
4. 默认占位符：`https://your-api-domain.example`

上线前请把占位符替换成你自己的 API 源站地址。

## 前端托管

把 `web/` 目录的内容上传到你的静态托管平台即可。

## 直接通过 Nginx 部署

这个项目也可以不经过隧道，直接在服务器上提供服务。

推荐结构：

- 公网站点：你自己的公开域名
- 本地后端：`http://127.0.0.1:8080`
- 数据共享：同一份 SQLite 数据库和上传目录

部署示例：

```bash
bash ./deploy_nginx.sh --domain your-site.example
sudo certbot --nginx -d your-site.example
```

或者让脚本自动跑 certbot：

```bash
bash ./deploy_nginx.sh --domain your-site.example --certbot
```

后续更新：

```bash
bash ./update_dual_sites.sh your-site.example
```

## 通过隧道暴露本地 API

1. 安装 `cloudflared`
2. `cloudflared tunnel login`
3. `cloudflared tunnel create your-blog-api`
4. 将 `your-api-domain.example` 绑定到该 tunnel
5. 使用 `backend/deploy/cloudflared/config.api.example.yml`

示例：

```bash
cloudflared tunnel route dns your-blog-api your-api-domain.example
cloudflared --config ~/.cloudflared/config.yml tunnel run your-blog-api
```

## Cookie / CORS 注意事项

- 本地 HTTP 测试时设置 `WB_COOKIE_SECURE=0`
- 生产 HTTPS 时改成 `WB_COOKIE_SECURE=1`
- `WB_ALLOWED_ORIGINS` 只保留你真实的前端来源
- 除非你明确知道后果，否则保持 `WB_COOKIE_DOMAIN=''`

## 邮箱验证

注册需要 6 位邮箱验证码。公开注册前请先配置 SMTP：

```bash
WB_SMTP_URL='smtps://smtp.example.com:465'
WB_SMTP_USERNAME='smtp-user'
WB_SMTP_PASSWORD='smtp-password'
WB_SMTP_FROM='no-reply@example.com'
WB_SMTP_FROM_NAME='Warehouse-Blog'
```

## 辅助日志脚本

```bash
python3 ./tools/api_health_logger.py   --local http://127.0.0.1:8080/api/health   --public https://your-api-domain.example/api/health   --profile https://your-api-domain.example/api/site-profile?lang=en
```

日志默认写入 `./logs/api-health.log`。
