#!/usr/bin/env python3
import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone


def stamp():
    return datetime.now(timezone.utc).isoformat()


def fetch(url, timeout=10):
    req = urllib.request.Request(url, headers={"User-Agent": "WarehouseBlogHealth/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        body = resp.read().decode("utf-8", "replace")
        return {
            "status": resp.status,
            "headers": dict(resp.headers.items()),
            "body": body,
        }


def line(path, payload):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "a", encoding="utf-8") as fp:
        fp.write(json.dumps(payload, ensure_ascii=False) + "\n")


def main():
    ap = argparse.ArgumentParser(description="Warehouse-Blog API health/logger helper")
    ap.add_argument("--local", required=True, help="Local health endpoint, e.g. http://IP:8080/api/health")
    ap.add_argument("--public", required=True, help="Public API health endpoint, e.g. https://your-api-domain.example/api/health")
    ap.add_argument("--profile", required=False, default="", help="Optional public site-profile endpoint")
    ap.add_argument("--log", default="./logs/api-health.log", help="Log path")
    ap.add_argument("--interval", type=int, default=60, help="Polling interval seconds")
    ap.add_argument("--once", action="store_true", help="Run once and exit")
    args = ap.parse_args()

    while True:
        payload = {"ts": stamp(), "local": None, "public": None, "profile": None}
        for key, url in (("local", args.local), ("public", args.public), ("profile", args.profile)):
            if not url:
                continue
            try:
                payload[key] = fetch(url)
            except Exception as exc:
                payload[key] = {"error": str(exc)}
        line(args.log, payload)
        print(json.dumps(payload, ensure_ascii=False, indent=2))
        sys.stdout.flush()
        if args.once:
            break
        time.sleep(max(5, args.interval))


if __name__ == "__main__":
    main()
