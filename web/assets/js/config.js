window.WAREHOUSE_CONFIG = {
  apiBase: (() => {
    const host = window.location.hostname || "";
    const configured = String(window.WAREHOUSE_API_BASE || document.documentElement?.dataset?.apiBase || "").trim();
    if (configured) {
      return configured.replace(/\/$/, "");
    }
    if (
      host === "thdeb.bbroot.com" ||
      host === "IP" ||
      host === "localhost" ||
      host.endsWith(".localhost")
    ) {
      return "";
    }
    return "https://api.thdeb.us.ci";
  })(),
  defaultAvatar: "/assets/img/default-avatar.svg",
  homePathByLang: {
    en: "index.html",
    "zh-CN": "index.zh-CN.html"
  },
  panelPathByLang: {
    en: "panel.html",
    "zh-CN": "panel.zh-CN.html"
  },
  boardPathByLang: {
    en: "board.html",
    "zh-CN": "board.zh-CN.html"
  },
  linksPathByLang: {
    en: "links.html",
    "zh-CN": "links.zh-CN.html"
  },
  aboutPathByLang: {
    en: "about.html",
    "zh-CN": "about.zh-CN.html"
  }
};
