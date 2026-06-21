
(() => {
  "use strict";

  const CONFIG = window.WAREHOUSE_CONFIG || {};
  const PAGE = document.body.dataset.page;
  const LANG = document.body.dataset.currentLang || "en";

  const T = {
    en: {
      loading: "Loading...",
      login: "Log In",
      logout: "Log Out",
      panel: "My Panel",
      panelNeedLogin: "Please log in first.",
      avatarNeedLogin: "Please log in before changing the avatar.",
      loginTitle: "Log In",
      registerTitle: "Register Account",
      yourEmailAddress: "Your Email Address",
      yourPassword: "Your Password",
      retypePassword: "Retype Your Password",
      yourUsername: "Your Username",
      max30: "Max 30 characters",
      passwordStrengthLabel: "Password strength",
      passwordStrengthEmpty: "Use 8+ characters with upper/lowercase letters, numbers, and symbols.",
      passwordStrengthWeak: "Weak",
      passwordStrengthFair: "Fair",
      passwordStrengthGood: "Good",
      passwordStrengthStrong: "Strong",
      passwordMismatch: "The two passwords do not match.",
      loginAccount: "Login Account",
      register: "Register",
      doneRegistration: "Done Registration",
      verifyEmailTitle: "Verify Email",
      verificationCode: "Verification Code",
      verificationHint: "We sent a 6-digit code to {email}.",
      verifyAndCreate: "Verify & Create Account",
      verificationSent: "Verification code sent. Please check your email.",
      verificationInvalid: "Invalid verification code.",
      verificationExpired: "Verification code expired. Please register again.",
      verificationTooMany: "Too many attempts. Please register again.",
      mailError: "Verification email could not be sent. Please contact the site owner.",
      close: "Close",
      loginSuccess: "Logged in successfully.",
      registerSuccess: "Registration completed and you are now logged in.",
      logoutSuccess: "Logged out successfully.",
      logoutConfirmTitle: "Log out?",
      logoutConfirmMessage: "Are you sure you want to log out?",
      logoutConfirmAction: "Log Out",
      saveSuccess: "Profile updated successfully.",
      avatarUpdated: "Avatar updated successfully.",
      genericError: "Request failed. Please try again.",
      requestTimeout: "The request timed out. Please try again.",
      networkError: "Network connection failed. Please try again.",
      existsWrongPassword: "The email address exists, but the password is incorrect!",
      emailMissing: "This email address does not exist! Please register first, then log in!",
      homeFallback: "No account information has been added yet.",
      myAccountLine: "The following is",
      noAccountInfoYet: "The user {name} has no account description information yet.",
      noAccountMethodsYet: "The user {name} has no account information yet.",
      editingMaterials: "Editing Materials",
      saveChanges: "Save Changes",
      cancel: "Cancel",
      bioLine1: "Profile Introduction",
      bioLine2: "Account Description",
      accountMethods: "Account Information (up to 5)",
      contactsHelp: "Supported types: YouTube, Bilibili, QQ, Gmail, GitHub, Twitter, Discord.",
      addRepo: "Add another git repository",
      repositories: "GitHub Repositories",
      repositoryUrl: "GitHub Repository URL or owner/repo",
      repositoryName: "Repository Display Name",
      repositoryNameHint: "Optional. Leave empty to use the repository name.",
      descriptionEn: "English Description",
      descriptionZh: "Simplified Chinese Description",
      removeItem: "Remove",
      contactType: "Account Type",
      contactValue: "Value / URL",
      contactLabel: "Extra Label / Username",
      contactEmpty: "You can fill in up to five account items.",
      repoEmpty: "No repositories have been added yet.",
      expandAllRepos: "Click to expand all",
      collapseRepos: "Collapse",
      starMissing: "Does not exist",
      notLoggedInPanel: "Please log in to view your panel.",
      panelDescription: "Your account information",
      cancelAccountConfirm: "Confirm account cancellation? After cancellation, all your account information will be deleted. A later registration will be treated as a brand-new account.",
      cancelAccountSuccess: "Your account has been deleted.",
      adminCannotDeleteSelf: "The highest-permission account cannot delete itself.",
      adminControls: "Admin Controls",
      adminUsersEmpty: "There are no other user accounts yet.",
      cancelUser: "Cancel User",
      deleteRepo: "Delete Repo",
      adminDeletedUser: "User account deleted.",
      adminDeletedRepo: "Repository entry deleted.",
      roleAdmin: "Admin",
      roleUser: "User",
      currentUser: "Current user",
      changeAvatarHint: "Click the avatar at the top-right corner to upload a new avatar after logging in.",
      saveAndClose: "Save & Close",
      accountDeletion: "Cancel Account",
      deleteRepoConfirm: "Delete this repository entry from the user's profile?",
      deleteUserConfirm: "Confirm account cancellation? After cancellation, all this user's account information will be deleted.",
      welcomeFallback: "Welcome to this project repository website.",
      projectRepositoryWebsite: "project repository website",
      topbarLoggedIn: "Logged In",
      loginPlease: "Please log in first.",
      adminNoSelfDelete: "You cannot cancel the highest-permission account.",
      emailLabel: "Email",
      usernameLabel: "Username",
      accountInformation: "Account information",
      currentRepos: "Current repositories",
      githubOnlyHint: "Only GitHub repositories are supported.",
      contactUsername: "{platform} username: {name}",
      contactBilibiliUsername: "Bilibili username: {name}",
      contactQQInfo: "QQ Contact information: {value}",
      contactGmailInfo: "Gmail Contact information: {value}",
      toggleDescription: "Toggle project description",
      invalidImageFile: "Invalid image file.",
      avatarTooLarge: "Avatar image is too large after compression.",
      emailInvalid: "Invalid email address.",
      usernameInvalid: "Username must be between 1 and 30 characters.",
      passwordInvalid: "Password must be between 8 and 128 characters.",
      emailExists: "This email address already exists.",
      board: "Message Board",
      links: "Friendly Link",
      about: "About",
      theme: "Theme",
      systemMode: "System",
      lightMode: "Light",
      darkMode: "Dark",
      searchUser: "Search UID",
      uidLabel: "UID",
      uidPlaceholder: "Enter UID",
      uidNotFound: "User not found.",
      searchUidPrompt: "Enter UID to view the user panel.",
      adminDeleteByUid: "Delete User by UID",
      adminDeleteByUidPrompt: "Enter the UID of the user you want to delete.",
      grantPermission: "Grant Permission",
      grantPermissionByUid: "Grant Permission by UID",
      grantPermissionByUidPrompt: "Enter the UID of the user you want to grant admin permission to.",
      adminGrantedUser: "Admin permission granted.",
      adminAlreadyGranted: "This user already has admin permission.",
      uidCannotDeleteAdmin: "You cannot delete the highest-permission account.",
      muteUser: "Mute",
      unmuteUser: "Unmute",
      mutedUser: "Muted",
      userMutedSuccess: "User muted.",
      userUnmutedSuccess: "User unmuted.",
      mutedCannotPost: "You are muted and cannot post or comment.",
      adminCannotMuteSelf: "You cannot mute an admin account.",
      boardTitle: "Message Board",
      boardNeedLogin: "Please log in before posting or commenting.",
      boardSortLabel: "Sort by",
      boardSortNewest: "Newest",
      boardSortOldest: "Oldest",
      boardSortHot: "Hot",
      createPost: "Create Post",
      createPostPlaceholder: "Share what you want to say...",
      publishPost: "Publish Post",
      noPostsYet: "No posts yet.",
      like: "Like",
      unlike: "Unlike",
      comments: "Comments",
      addReaction: "Add reaction",
      viewComments: "Click to view comments ({count})",
      hideComments: "Hide comments",
      commentPlaceholder: "Write a comment...",
      sendComment: "Send",
      deletePost: "Delete Post",
      expandPost: "Show full post",
      collapsePost: "Collapse post",
      backToTop: "Back to top",
      deleteComment: "Delete Comment",
      publicPanel: "Public Panel",
      viewOnlyPanel: "You are viewing this user's public panel. Editing is disabled.",
      postBodyInvalid: "Post content must be between 1 and 4000 characters.",
      commentBodyInvalid: "Comment content must be between 1 and 1000 characters.",
    },
    "zh-CN": {
      loading: "加载中...",
      login: "登录",
      logout: "退出登录",
      panel: "我的面板",
      panelNeedLogin: "请先登录。",
      avatarNeedLogin: "请先登录后再更换头像。",
      loginTitle: "登录",
      registerTitle: "注册账号",
      yourEmailAddress: "邮箱地址",
      yourPassword: "密码",
      retypePassword: "确认密码",
      yourUsername: "用户名",
      max30: "最多 30 个字符",
      passwordStrengthLabel: "密码强度",
      passwordStrengthEmpty: "建议至少 8 位，并包含大小写字母、数字和符号。",
      passwordStrengthWeak: "弱",
      passwordStrengthFair: "一般",
      passwordStrengthGood: "良好",
      passwordStrengthStrong: "强",
      passwordMismatch: "两次输入的密码不一致。",
      loginAccount: "登录账号",
      register: "注册",
      doneRegistration: "完成注册",
      verifyEmailTitle: "验证邮箱",
      verificationCode: "验证码",
      verificationHint: "验证码已发送至 {email}，请输入 6 位数字。",
      verifyAndCreate: "验证并创建账号",
      verificationSent: "验证码已发送，请查看邮箱。",
      verificationInvalid: "验证码无效。",
      verificationExpired: "验证码已过期，请重新注册。",
      verificationTooMany: "尝试次数过多，请重新注册。",
      mailError: "验证邮件发送失败，请联系站点管理员。",
      close: "关闭",
      loginSuccess: "登录成功。",
      registerSuccess: "注册完成并已自动登录。",
      logoutSuccess: "已退出登录。",
      logoutConfirmTitle: "确认退出登录？",
      logoutConfirmMessage: "确定要退出当前账号吗？",
      logoutConfirmAction: "退出登录",
      saveSuccess: "资料已更新。",
      avatarUpdated: "头像已更新。",
      genericError: "请求失败，请稍后再试。",
      requestTimeout: "请求超时，请稍后再试。",
      networkError: "网络连接失败，请稍后再试。",
      existsWrongPassword: "该邮箱地址已存在，但密码错误！",
      emailMissing: "这个邮箱地址不存在！请先注册后再登录！",
      homeFallback: "还没有账号信息。",
      myAccountLine: "以下是",
      noAccountInfoYet: "用户 {name} 还没有账号说明信息。",
      noAccountMethodsYet: "用户 {name} 还没有账号信息。",
      editingMaterials: "编辑资料",
      saveChanges: "保存修改",
      cancel: "取消",
      bioLine1: "简介介绍",
      bioLine2: "账号说明",
      accountMethods: "账号信息（最多 5 项）",
      contactsHelp: "支持类型：YouTube、Bilibili、QQ、Gmail、GitHub、Twitter、Discord。",
      addRepo: "再添加一个 Git 仓库",
      repositories: "GitHub 仓库",
      repositoryUrl: "GitHub 仓库地址或 owner/repo",
      repositoryName: "仓库显示名称",
      repositoryNameHint: "可选，不填则自动使用仓库名。",
      descriptionEn: "英文说明",
      descriptionZh: "简体中文说明",
      removeItem: "删除",
      contactType: "账号类型",
      contactValue: "值 / 链接",
      contactLabel: "额外标签 / 用户名",
      contactEmpty: "你最多可以填写五个账号信息。",
      repoEmpty: "还没有添加任何仓库。",
      expandAllRepos: "点击以展开全部",
      collapseRepos: "收起",
      starMissing: "不存在",
      notLoggedInPanel: "请先登录后查看你的面板。",
      panelDescription: "你的账号信息",
      cancelAccountConfirm: "确认注销账号吗？注销后，你的全部账号资料都会被删除。之后重新注册将视为全新账号。",
      cancelAccountSuccess: "你的账号已被删除。",
      adminCannotDeleteSelf: "最高权限账号不能删除自己。",
      adminControls: "管理面板",
      adminUsersEmpty: "暂时还没有其他用户账号。",
      cancelUser: "注销用户",
      deleteRepo: "删除仓库项",
      adminDeletedUser: "用户账号已删除。",
      adminDeletedRepo: "仓库项已删除。",
      roleAdmin: "管理员",
      roleUser: "普通用户",
      currentUser: "当前用户",
      changeAvatarHint: "登录后点击网页右上角头像即可上传新头像。",
      saveAndClose: "保存并关闭",
      accountDeletion: "注销账号",
      deleteRepoConfirm: "删除这个用户资料中的仓库项吗？",
      deleteUserConfirm: "确认注销这个账号吗？注销后，该用户的全部资料都会被删除。",
      welcomeFallback: "欢迎来到这个项目仓库网站。",
      projectRepositoryWebsite: "项目仓库网站",
      topbarLoggedIn: "已登录",
      loginPlease: "请先登录。",
      adminNoSelfDelete: "你不能注销最高权限账号。",
      emailLabel: "邮箱",
      usernameLabel: "用户名",
      accountInformation: "账号信息",
      currentRepos: "当前仓库",
      githubOnlyHint: "目前只支持 GitHub 仓库。",
      contactUsername: "{platform} 用户名：{name}",
      contactBilibiliUsername: "Bilibili 用户名：{name}",
      contactQQInfo: "QQ 联系方式：{value}",
      contactGmailInfo: "Gmail 联系方式：{value}",
      toggleDescription: "展开或收起项目说明",
      invalidImageFile: "无效的图片文件。",
      avatarTooLarge: "头像压缩后仍然过大，请换一张图片。",
      emailInvalid: "邮箱地址格式无效。",
      usernameInvalid: "用户名长度必须在 1 到 30 个字符之间。",
      passwordInvalid: "密码长度必须在 8 到 128 个字符之间。",
      emailExists: "这个邮箱地址已经被注册。",
      board: "留言板",
      links: "友链",
      about: "关于",
      theme: "主题",
      systemMode: "跟随系统",
      lightMode: "浅色",
      darkMode: "深色",
      searchUser: "搜索 UID",
      uidLabel: "UID",
      uidPlaceholder: "输入 UID",
      uidNotFound: "没有找到该用户。",
      searchUidPrompt: "请输入要查看的用户 UID。",
      adminDeleteByUid: "按 UID 注销用户",
      adminDeleteByUidPrompt: "请输入你要注销的用户 UID。",
      grantPermission: "赋予权限",
      grantPermissionByUid: "按 UID 赋予权限",
      grantPermissionByUidPrompt: "请输入你要赋予管理员权限的用户 UID。",
      adminGrantedUser: "已赋予管理员权限。",
      adminAlreadyGranted: "该用户已经拥有管理员权限。",
      uidCannotDeleteAdmin: "你不能删除最高权限账号。",
      muteUser: "禁言",
      unmuteUser: "解除禁言",
      mutedUser: "已禁言",
      userMutedSuccess: "已禁言该用户。",
      userUnmutedSuccess: "已解除该用户禁言。",
      mutedCannotPost: "你已被禁言，不能发帖或评论。",
      adminCannotMuteSelf: "不能禁言管理员账号。",
      boardTitle: "帖子广场",
      boardNeedLogin: "请先登录后再发帖或评论。",
      boardSortLabel: "排序方式",
      boardSortNewest: "最新",
      boardSortOldest: "最早",
      boardSortHot: "热度",
      createPost: "发布帖子",
      createPostPlaceholder: "写下你想说的话……",
      publishPost: "发布",
      noPostsYet: "还没有任何帖子。",
      like: "点赞",
      unlike: "取消点赞",
      comments: "评论",
      addReaction: "添加互动",
      viewComments: "点击以查看评论（{count}）",
      hideComments: "收起评论",
      commentPlaceholder: "写下评论……",
      sendComment: "发送",
      deletePost: "删除帖子",
      expandPost: "展开全文",
      collapsePost: "收起帖子",
      backToTop: "返回顶部",
      deleteComment: "删除评论",
      publicPanel: "公开面板",
      viewOnlyPanel: "你正在查看该用户的公开面板，无法编辑。",
      postBodyInvalid: "帖子内容长度必须在 1 到 4000 个字符之间。",
      commentBodyInvalid: "评论内容长度必须在 1 到 1000 个字符之间。",
    }
  };

  const CONTACT_TYPES = ["youtube", "bilibili", "qq", "gmail", "github", "twitter", "discord"];
  const CONTACT_ICON = {
    youtube: "/assets/img/youtube.png",
    bilibili: "/assets/img/bilibili.png",
    qq: "/assets/img/qq.png",
    gmail: "/assets/img/gmail.png",
    github: "/assets/img/github.png",
    twitter: "/assets/img/twitter.svg",
    discord: "/assets/img/discord.svg"
  };
  const CONTACT_TYPE_LABEL = {
    youtube: "YouTube",
    bilibili: "Bilibili",
    qq: "QQ",
    gmail: "Gmail",
    github: "GitHub",
    twitter: "Twitter",
    discord: "Discord"
  };

  const state = {
    session: null,
    publicProfile: null,
    me: null,
    adminUsers: [],
    modalType: null,
    modalPayload: null,
    boardSort: "newest",
    loadingCount: 0
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function t(key, vars = {}) {
    const table = T[LANG] || T.en;
    let text = table[key] ?? T.en[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replaceAll(`{${k}}`, String(v));
    });
    return text;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function isHome() {
    return PAGE === "home";
  }

  function isPanel() {
    return PAGE === "panel";
  }

  function isBoard() {
    return PAGE === "board";
  }

  function homePath() {
    return CONFIG.homePathByLang?.[LANG] || "index.html";
  }

  function panelPath() {
    return CONFIG.panelPathByLang?.[LANG] || "panel.html";
  }

  function boardPath() {
    return CONFIG.boardPathByLang?.[LANG] || "board.html";
  }

  function linksPath() {
    return CONFIG.linksPathByLang?.[LANG] || (LANG === "zh-CN" ? "links.zh-CN.html" : "links.html");
  }

  function aboutPath() {
    return CONFIG.aboutPathByLang?.[LANG] || (LANG === "zh-CN" ? "about.zh-CN.html" : "about.html");
  }

  function currentOrigin() {
    return window.location.origin || "";
  }

  function joinUrl(base, path) {
    const left = String(base || "").replace(/\/+$/, "");
    const right = String(path || "").replace(/^\/+/, "");
    return left && right ? `${left}/${right}` : (left || (right ? `/${right}` : ""));
  }

  function siteBaseUrl() {
    const configured = String(CONFIG.basePath || "").trim();
    if (configured) {
      return new URL(configured.replace(/\/?$/, "/"), window.location.origin).toString();
    }
    const script = Array.from(document.scripts).find((item) => /(?:^|\/)assets\/js\/app\.js(?:[?#].*)?$/.test(item.src || ""));
    return script?.src ? new URL("../..", script.src).toString().replace(/\/?$/, "/") : new URL("./", window.location.href).toString();
  }

  function sitePageUrl(target) {
    const raw = String(target || "").trim();
    if (!raw || raw.startsWith("#")) return new URL(raw || window.location.href, window.location.href);
    if (/^[a-z][a-z0-9+.-]*:/i.test(raw)) return new URL(raw);
    if (raw.startsWith("/")) return new URL(raw, window.location.origin);
    return new URL(raw.replace(/^(?:\.{1,2}\/)+/, ""), siteBaseUrl());
  }

  function localAssetUrl(path) {
    const script = Array.from(document.scripts).find((item) => /(?:^|\/)assets\/js\/app\.js(?:[?#].*)?$/.test(item.src || ""));
    const base = script?.src ? new URL("../", script.src) : new URL("./assets/", window.location.href);
    const clean = String(path || "").replace(/^\.?\/?assets\//, "");
    return new URL(clean, base).toString();
  }

  function resolveMediaUrl(input) {
    const raw = String(input || "").trim();
    const fallback = localAssetUrl("img/default-avatar.svg");
    if (!raw) {
      return fallback;
    }
    if (/^(data:|blob:|https?:\/\/)/i.test(raw)) {
      return raw;
    }
    if (raw.startsWith("/uploads/")) {
      return (CONFIG.apiBase || currentOrigin()) + raw;
    }
    if (raw.startsWith("./uploads/")) {
      return (CONFIG.apiBase || currentOrigin()) + raw.slice(1);
    }
    if (raw.startsWith("uploads/")) {
      return joinUrl(CONFIG.apiBase || currentOrigin(), raw);
    }
    if (raw.startsWith("/assets/")) {
      return localAssetUrl(raw);
    }
    if (raw.startsWith("./assets/")) {
      return localAssetUrl(raw);
    }
    if (raw.startsWith("assets/")) {
      return localAssetUrl(raw);
    }
    return raw;
  }

  function avatarFallbackAttr() {
    const fallback = escapeAttribute(resolveMediaUrl(CONFIG.defaultAvatar || "/assets/img/default-avatar.svg"));
    return ` onerror="this.onerror=null;this.src='${fallback}'"`;
  }

  function currentHashUid() {
    return String(window.location.hash || "").replace(/^#/, "").trim();
  }

  function ensureGlobalLoader() {
    let loader = $("[data-site-loader]");
    if (loader || !document.body) return loader;
    document.body.insertAdjacentHTML("afterbegin", `
      <div class="site-loader" data-site-loader hidden aria-hidden="true">
        <div class="site-loader__dialog" role="status" aria-live="polite" aria-label="${escapeHtml(t("loading"))}">
          <div class="site-loader__spinner" aria-hidden="true"></div>
          <div class="site-loader__label" data-site-loader-label>${escapeHtml(t("loading"))}</div>
        </div>
      </div>
    `);
    return $("[data-site-loader]");
  }

  function showGlobalLoader(message = t("loading")) {
    const loader = ensureGlobalLoader();
    if (!loader) return;
    const label = $("[data-site-loader-label]", loader);
    if (label) label.textContent = message;
    state.loadingCount = Math.max(0, Number(state.loadingCount || 0)) + 1;
    loader.hidden = false;
    window.requestAnimationFrame(() => loader.classList.add("is-visible"));
  }

  function hideGlobalLoader(force = false) {
    const loader = ensureGlobalLoader();
    if (!loader) return;
    state.loadingCount = force ? 0 : Math.max(0, Number(state.loadingCount || 0) - 1);
    if (state.loadingCount > 0) return;
    loader.classList.remove("is-visible");
    window.setTimeout(() => {
      if ((state.loadingCount || 0) === 0) {
        loader.hidden = true;
      }
    }, 180);
  }

  async function runWithLoader(task, message = t("loading")) {
    showGlobalLoader(message);
    try {
      return await (typeof task === "function" ? task() : task);
    } finally {
      hideGlobalLoader();
    }
  }

  function navTo(target) {
    if (!target) return;
    const resolved = sitePageUrl(target);
    const sameDocument =
      resolved.origin === window.location.origin &&
      resolved.pathname === window.location.pathname &&
      resolved.search === window.location.search;

    if (sameDocument) {
      const nextHash = resolved.hash || "";
      if (nextHash === (window.location.hash || "")) return;
      history.pushState(null, "", `${resolved.pathname}${resolved.search}${nextHash}`);
      if (isPanel()) {
        runWithLoader(() => loadPanel()).catch((error) => {
          toast(error?.message || t("genericError"), "error");
        });
      }
      return;
    }

    showGlobalLoader();
    window.location.href = resolved.toString();
  }

  function toast(message, type = "info") {
    const host = $("[data-toast-stack]");
    if (!host) return;
    const node = document.createElement("div");
    node.className = `toast toast--${type}`;
    node.textContent = message;
    host.appendChild(node);
    setTimeout(() => {
      node.style.opacity = "0";
      node.style.transform = "translateY(10px)";
      setTimeout(() => node.remove(), 220);
    }, 3200);
  }

  const STORAGE_KEYS = {
    localUsers: "warehouse_blog_local_users_v4",
    sessionEmail: "warehouse_blog_session_email_v4",
    adminOverride: "warehouse_blog_admin_override_v4"
  };

  let adminSeedPromise = null;

  function makeError(message, code = "BAD_REQUEST", status = 400) {
    const error = new Error(message);
    error.status = status;
    error.payload = { error: message, code };
    return error;
  }

  function safeJsonParse(text, fallback) {
    try {
      return JSON.parse(text);
    } catch {
      return fallback;
    }
  }

  function readStorage(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? safeJsonParse(raw, fallback) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function deleteStorage(key) {
    window.localStorage.removeItem(key);
  }

  async function sha256Hex(input) {
    const bytes = new TextEncoder().encode(String(input ?? ""));
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  async function getAdminSeed() {
    if (!adminSeedPromise) {
      adminSeedPromise = fetch("/data/admin-account.json", { cache: "no-store" })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to load admin account seed.");
          return response.json();
        });
    }
    return adminSeedPromise;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function currentLangKey() {
    return LANG === "zh-CN" ? "zh-CN" : "en";
  }

  function localizedText(value) {
    if (value && typeof value === "object") {
      return String(value[currentLangKey()] || value.en || value["zh-CN"] || "");
    }
    return String(value || "");
  }

  function ensureTextMap(value, fallback = "") {
    if (value && typeof value === "object") {
      return {
        en: String(value.en || fallback || ""),
        "zh-CN": String(value["zh-CN"] || value.en || fallback || "")
      };
    }
    return {
      en: String(value || fallback || ""),
      "zh-CN": String(value || fallback || "")
    };
  }

  function normalizeContacts(contacts) {
    return (Array.isArray(contacts) ? contacts : [])
      .slice(0, 5)
      .map((contact) => ({
        type: CONTACT_TYPES.includes(contact?.type) ? contact.type : "github",
        value: String(contact?.value || "").trim(),
        extraLabel: String(contact?.extraLabel || "").trim()
      }))
      .filter((contact) => contact.value);
  }

  function normalizeRepos(repos) {
    return (Array.isArray(repos) ? repos : []).map((repo, index) => {
      const owner = String(repo?.owner || "").trim();
      const nameOnly = String(repo?.repo || "").trim();
      const fullName = String(repo?.fullName || (owner && nameOnly ? `${owner}/${nameOnly}` : "")).trim();
      let finalOwner = owner;
      let finalRepo = nameOnly;
      if ((!finalOwner || !finalRepo) && fullName.includes("/")) {
        const [a, b] = fullName.split("/", 2);
        finalOwner = finalOwner || a;
        finalRepo = finalRepo || b;
      }
      const url = String(repo?.url || (fullName ? `https://github.com/${fullName}` : "")).trim();
      return {
        id: String(repo?.id || `${Date.now()}_${index}_${Math.random().toString(36).slice(2, 8)}`),
        name: String(repo?.name || finalRepo || "").trim(),
        owner: finalOwner,
        repo: finalRepo,
        fullName,
        url,
        descriptionEn: String(repo?.descriptionEn || "").trim(),
        descriptionZh: String(repo?.descriptionZh || "").trim()
      };
    }).filter((repo) => repo.fullName);
  }

  function getAdminOverride() {
    const data = readStorage(STORAGE_KEYS.adminOverride, null);
    if (!data || typeof data !== "object") return null;
    return data;
  }

  function setAdminOverride(data) {
    writeStorage(STORAGE_KEYS.adminOverride, data);
  }

  function getLocalUsers() {
    const users = readStorage(STORAGE_KEYS.localUsers, []);
    return Array.isArray(users) ? users : [];
  }

  function saveLocalUsers(users) {
    writeStorage(STORAGE_KEYS.localUsers, users);
  }

  function getSessionEmail() {
    return normalizeEmail(window.localStorage.getItem(STORAGE_KEYS.sessionEmail) || "");
  }

  function setSessionEmail(email) {
    window.localStorage.setItem(STORAGE_KEYS.sessionEmail, normalizeEmail(email));
  }

  function clearSessionEmail() {
    deleteStorage(STORAGE_KEYS.sessionEmail);
  }

  function summarizeUser(user) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatarDataUrl: resolveMediaUrl(user.avatarDataUrl || CONFIG.defaultAvatar)
    };
  }

  function parseGitHubRepoInput(input) {
    const raw = String(input || "").trim();
    if (!raw) return null;

    let ownerRepo = raw;
    if (/^git@github\.com:/i.test(ownerRepo)) {
      ownerRepo = ownerRepo.replace(/^git@github\.com:/i, "");
    } else if (/^(?:www\.)?github\.com\//i.test(ownerRepo)) {
      ownerRepo = ownerRepo.replace(/^(?:www\.)?github\.com\//i, "");
    } else if (/^https?:\/\//i.test(ownerRepo)) {
      try {
        const url = new URL(ownerRepo);
        const host = String(url.hostname || "").replace(/^www\./i, "").toLowerCase();
        if (host !== "github.com") {
          return null;
        }
        const parts = url.pathname.split("/").filter(Boolean);
        ownerRepo = parts.slice(0, 2).join("/");
      } catch {
        return null;
      }
    }

    ownerRepo = ownerRepo
      .replace(/^\/+|\/+$/g, "")
      .replace(/\.git$/i, "");

    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(ownerRepo)) {
      return null;
    }

    const [owner, repo] = ownerRepo.split("/", 2);
    return {
      owner,
      repo,
      fullName: `${owner}/${repo}`,
      url: `https://github.com/${owner}/${repo}`
    };
  }

  function blankRepoDraft() {
    return { id: "", name: "", repoInput: "", descriptionEn: "", descriptionZh: "" };
  }

  function normalizeRepoDraft(repo) {
    return {
      id: String(repo?.id || "").trim(),
      name: String(repo?.name || "").trim(),
      repoInput: String(repo?.repoInput || repo?.url || repo?.fullName || "").trim(),
      descriptionEn: String(repo?.descriptionEn || "").trim(),
      descriptionZh: String(repo?.descriptionZh || "").trim()
    };
  }

  function normalizeRepoDrafts(repos) {
    return (Array.isArray(repos) ? repos : [])
      .map((repo) => normalizeRepoDraft(repo))
      .filter((repo) => repo.id || repo.name || repo.repoInput || repo.descriptionEn || repo.descriptionZh);
  }

  async function buildAdminRecord() {
    const seed = clone(await getAdminSeed());
    const override = getAdminOverride() || {};
    const account = {
      id: "admin",
      role: "admin",
      username: String(override.username || seed.account?.username || "Site Admin"),
      email: normalizeEmail(override.email || seed.account?.email || ""),
      passwordHash: String(seed.account?.passwordHash || "")
    };

    const profileSource = seed.profile || {};
    const avatarDataUrl = String(
      override.avatarDataUrl
      || profileSource.avatarDataUrl
      || "./assets/img/user.png"
    );

    const bioLine1 = override.bioLine1
      ? ensureTextMap(override.bioLine1, localizedText(profileSource.bioLine1))
      : ensureTextMap(profileSource.bioLine1, "");
    const bioLine2 = override.bioLine2
      ? ensureTextMap(override.bioLine2, localizedText(profileSource.bioLine2))
      : ensureTextMap(profileSource.bioLine2, "");

    const contacts = normalizeContacts(override.contacts || profileSource.contacts || []);
    const repos = normalizeRepos(override.repos || profileSource.repos || []);

    return {
      id: account.id,
      role: account.role,
      username: account.username,
      email: account.email,
      passwordHash: account.passwordHash,
      avatarDataUrl: resolveMediaUrl(avatarDataUrl),
      bioLine1,
      bioLine2,
      contacts,
      repos,
      lang: LANG
    };
  }

  function buildPublicProfileFromRecord(record) {
    return {
      username: record.username,
      avatarDataUrl: resolveMediaUrl(record.avatarDataUrl),
      bioLine1: localizedText(record.bioLine1),
      bioLine2: localizedText(record.bioLine2),
      contacts: clone(record.contacts || []),
      repos: clone(record.repos || [])
    };
  }

  function buildLocalHomeProfile() {
    return {
      username: LANG === "zh-CN" ? "THDeb(幻想乡的Debian）" : "THDeb (TouhouDebian)",
      avatarDataUrl: "./assets/img/user.png",
      bioLine1: LANG === "zh-CN"
        ? "欢迎来到 THDeb 的项目仓库网站。你也可以发布自己的项目并展示你的成果！🥰"
        : "Welcome to THDeb's project repository website. You can also publish your projects and show your work! 🥰",
      bioLine2: LANG === "zh-CN"
        ? "以下是 THDeb 的个人账号。"
        : "The following are THDeb's personal accounts.",
      contacts: [
        {
          type: "github",
          value: "https://github.com/TouhouDebian",
          extraLabel: ""
        },
        {
          type: "twitter",
          value: "https://x.com/touhoudebian",
          extraLabel: ""
        },
        {
          type: "bilibili",
          value: "https://space.bilibili.com/513026513",
          extraLabel: LANG === "zh-CN" ? "幻想乡的Debian" : "TouhouDebian"
        },
        {
          type: "youtube",
          value: "https://www.youtube.com/@touhoudebian",
          extraLabel: ""
        },
        {
          type: "qq",
          value: "969764494",
          extraLabel: ""
        }
      ],
      repos: [],
      hideEmptyContacts: false
    };
  }

  async function fetchTouhouDebianRepos() {
    const response = await fetch("https://api.github.com/users/TouhouDebian/repos?per_page=100&sort=updated", {
      headers: {
        "Accept": "application/vnd.github+json"
      },
      cache: "no-store"
    });
    if (!response.ok) return [];
    const repos = await response.json();
    return (Array.isArray(repos) ? repos : [])
      .filter((repo) => !repo?.archived)
      .map((repo) => ({
        id: String(repo.id || repo.full_name || repo.name),
        name: String(repo.name || ""),
        owner: "TouhouDebian",
        repo: String(repo.name || ""),
        fullName: String(repo.full_name || `TouhouDebian/${repo.name || ""}`),
        url: String(repo.html_url || `https://github.com/TouhouDebian/${repo.name || ""}`),
        descriptionEn: String(repo.description || "GitHub repository by TouhouDebian."),
        descriptionZh: String(repo.description || "TouhouDebian 的 GitHub 仓库。")
      }))
      .filter((repo) => repo.name && repo.url);
  }

  function buildMeProfile(record) {
    return {
      id: record.id,
      username: record.username,
      email: record.email,
      role: record.role,
      avatarDataUrl: resolveMediaUrl(record.avatarDataUrl),
      bioLine1: localizedText(record.bioLine1),
      bioLine2: localizedText(record.bioLine2),
      contacts: clone(record.contacts || []),
      repos: clone(record.repos || [])
    };
  }

  async function getCurrentUserRecord() {
    const email = getSessionEmail();
    if (!email) return null;
    const admin = await buildAdminRecord();
    if (email === admin.email) return admin;
    const users = getLocalUsers();
    const user = users.find((item) => normalizeEmail(item.email) === email);
    return user ? clone(user) : null;
  }

  async function saveUserRecord(record) {
    if (record.role === "admin") {
      const current = getAdminOverride() || {};
      const bioLine1 = ensureTextMap(record.bioLine1, "");
      const bioLine2 = ensureTextMap(record.bioLine2, "");
      setAdminOverride({
        ...current,
        username: record.username,
        email: record.email,
        avatarDataUrl: resolveMediaUrl(record.avatarDataUrl),
        bioLine1,
        bioLine2,
        contacts: normalizeContacts(record.contacts || []),
        repos: normalizeRepos(record.repos || [])
      });
      return;
    }

    const users = getLocalUsers();
    const index = users.findIndex((item) => item.id === record.id);
    if (index >= 0) {
      users[index] = clone(record);
      saveLocalUsers(users);
    }
  }

  function validateProfileBody(body) {
    const contacts = normalizeContacts(body.contacts || []);
    const repos = (Array.isArray(body.repos) ? body.repos : []).map((repo, index) => {
      const parsed = parseGitHubRepoInput(repo.repoInput || repo.url || repo.fullName || "");
      if (!parsed) return null;
      return {
        id: String(repo.id || `${Date.now()}_${index}_${Math.random().toString(36).slice(2, 8)}`),
        name: String(repo.name || parsed.repo).trim() || parsed.repo,
        owner: parsed.owner,
        repo: parsed.repo,
        fullName: parsed.fullName,
        url: parsed.url,
        descriptionEn: String(repo.descriptionEn || "").trim(),
        descriptionZh: String(repo.descriptionZh || "").trim()
      };
    }).filter(Boolean);

    return {
      bioLine1: String(body.bioLine1 || "").trim(),
      bioLine2: String(body.bioLine2 || "").trim(),
      contacts,
      repos,
      lang: LANG
    };
  }

  function adminUsersResponse(adminRecord, currentRecord) {
    const users = [adminRecord, ...getLocalUsers()];
    return users.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      isCurrentUser: currentRecord ? user.id === currentRecord.id : false,
      bioLine2: localizedText(user.bioLine2),
      repos: normalizeRepos(user.repos || []).map((repo) => ({
        id: repo.id,
        name: repo.name || repo.repo,
        fullName: repo.fullName,
        url: repo.url
      }))
    }));
  }

  async function fetchStarsDirect(repo) {
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo || "")) {
      throw makeError("Invalid repo format", "BAD_REPO", 400);
    }
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        "Accept": "application/vnd.github+json"
      },
      cache: "no-store"
    });
    if (response.status === 404) {
      return { repo, exists: false };
    }
    if (!response.ok) {
      throw makeError("GitHub upstream failed", "GITHUB_UPSTREAM", 502);
    }
    const data = await response.json();
    return {
      repo,
      exists: true,
      stars: Number(data.stargazers_count || 0),
      fetchedAt: new Date().toISOString()
    };
  }

  async function api(path, options = {}) {
    const method = (options.method || "GET").toUpperCase();
    const headers = {
      "Accept": "application/json"
    };
    let body = undefined;
    const timeoutMs = Number(options.timeoutMs || 20000);
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(new DOMException("Timed out", "AbortError")), timeoutMs);
    const useLoader = options.useLoader !== false;

    if (options.body !== undefined && method !== "GET" && method !== "HEAD") {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(options.body);
    }

    if (useLoader) showGlobalLoader();

    let response;
    try {
      response = await fetch(`${CONFIG.apiBase || ""}${path}`, {
        method,
        headers,
        body,
        credentials: "include",
        cache: "no-store",
        signal: controller.signal
      });
    } catch (error) {
      if (error?.name === "AbortError") {
        throw makeError(t("requestTimeout"), "REQUEST_TIMEOUT", 408);
      }
      throw makeError(t("networkError"), "NETWORK_ERROR", 0);
    } finally {
      window.clearTimeout(timer);
      if (useLoader) hideGlobalLoader();
    }

    const text = await response.text();
    const payload = text ? safeJsonParse(text, null) : null;

    if (!response.ok) {
      const code = payload?.code || `HTTP_${response.status}`;
      const mappedMessage = (
        code === "PASSWORD_INCORRECT" ? t("existsWrongPassword") :
        code === "EMAIL_NOT_FOUND" ? t("emailMissing") :
        code === "BAD_EMAIL" ? t("emailInvalid") :
        code === "BAD_USERNAME" ? t("usernameInvalid") :
        code === "BAD_PASSWORD" ? t("passwordInvalid") :
        code === "EMAIL_EXISTS" ? t("emailExists") :
        code === "NOT_AUTHORIZED" ? t("loginPlease") :
        code === "ADMIN_SELF_DELETE" ? t("adminCannotDeleteSelf") :
        code === "ADMIN_SELF_MUTE" ? t("adminCannotMuteSelf") :
        code === "USER_MUTED" ? t("mutedCannotPost") :
        code === "BAD_IMAGE" ? t("invalidImageFile") :
        code === "IMAGE_TOO_LARGE" ? t("avatarTooLarge") :
        code === "REQUEST_TIMEOUT" ? t("requestTimeout") :
        code === "NETWORK_ERROR" ? t("networkError") :
        payload?.error ||
        payload?.message ||
        t("genericError")
      );
      throw makeError(mappedMessage, code, response.status);
    }

    return payload || {};
  }


  function initLanguageMenu() {
    const box = $("[data-language-box]");
    const button = $("[data-language-button]");
    const menu = $("[data-language-menu]");
    if (!box || !button || !menu) return;

    button.addEventListener("click", () => {
      const open = box.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });

    $$("[data-language-item]", menu).forEach((item) => {
      item.addEventListener("click", () => {
        const target = localizedNavigationTarget(item.getAttribute("data-target"));
        if (target) navTo(target);
      });
    });

    document.addEventListener("click", (event) => {
      if (!box.contains(event.target)) {
        box.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  function localizedNavigationTarget(target) {
    if (!target) return "";
    if (!isPanel()) return target;
    const requestedUid = currentHashUid();
    return requestedUid ? `${target}#${encodeURIComponent(requestedUid)}` : target;
  }

  function preferredTheme() {
    const saved = localStorage.getItem("warehouse-theme");
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
    return "dark";
  }

  function resolvedTheme(theme) {
    if (theme === "light" || theme === "dark") return theme;
    return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    const clean = theme === "light" || theme === "dark" || theme === "system" ? theme : "system";
    document.documentElement.dataset.theme = resolvedTheme(clean);
    document.documentElement.dataset.themeChoice = clean;
    localStorage.setItem("warehouse-theme", clean);
    $$("[data-theme-option]").forEach((item) => {
      const active = item.getAttribute("data-theme-option") === clean;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }

  function ensureThemeMenu() {
    if ($("[data-theme-box]")) return;
    const searchButton = $("[data-search-open]");
    if (!searchButton) return;
    searchButton.insertAdjacentHTML("afterend", `
      <div class="theme-box" data-theme-box>
        <button class="topbar__button topbar__button--light theme-box__button" type="button" aria-expanded="false" aria-controls="theme-menu" data-theme-button>${escapeHtml(t("theme"))}</button>
        <div class="theme-box__menu" id="theme-menu" data-theme-menu>
          <button class="theme-box__item" type="button" data-theme-option="system" aria-pressed="false">${escapeHtml(t("systemMode"))}</button>
          <button class="theme-box__item" type="button" data-theme-option="light" aria-pressed="false">${escapeHtml(t("lightMode"))}</button>
          <button class="theme-box__item" type="button" data-theme-option="dark" aria-pressed="false">${escapeHtml(t("darkMode"))}</button>
        </div>
      </div>
    `);
  }

  function initThemeMenu() {
    ensureThemeMenu();
    const box = $("[data-theme-box]");
    const button = $("[data-theme-button]");
    if (!box || !button) return;

    button.addEventListener("click", () => {
      const open = box.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });

    $$("[data-theme-option]", box).forEach((item) => {
      item.addEventListener("click", () => {
        applyTheme(item.getAttribute("data-theme-option"));
        box.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!box.contains(event.target)) {
        box.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });

    applyTheme(preferredTheme());
    window.matchMedia?.("(prefers-color-scheme: light)")?.addEventListener?.("change", () => {
      if (localStorage.getItem("warehouse-theme") === "system") applyTheme("system");
    });
  }

  function ensureMobileTopbarMenu() {
    if ($("[data-mobile-topbar-menu]")) return;
    const topbar = $(".topbar");
    const left = $(".topbar__left");
    const right = $(".topbar__right");
    if (!topbar || !left || !right) return;

    const wrapper = document.createElement("div");
    wrapper.className = "mobile-topbar-menu";
    wrapper.setAttribute("data-mobile-topbar-menu", "");
    wrapper.innerHTML = `
      <button class="mobile-topbar-menu__toggle" type="button" aria-expanded="false" aria-label="More navigation" data-mobile-topbar-toggle>...</button>
      <div class="mobile-topbar-menu__panel" data-mobile-topbar-panel></div>
    `;

    const panel = $("[data-mobile-topbar-panel]", wrapper);
    const languageBox = $("[data-language-box]", left);
    const searchButton = $("[data-search-open]", right);
    const panelButton = $("[data-panel-button]", right);
    const avatarButton = $("[data-avatar-trigger]", right);
    const avatarInput = $("[data-avatar-input]", right);
    const moveTargets = [
      ...Array.from(left.children).filter((child) => child !== languageBox),
      ...Array.from(right.children).filter((child) => child !== searchButton && child !== panelButton && child !== avatarButton && child !== avatarInput)
    ];
    const records = moveTargets.map((node) => {
      const marker = document.createComment("mobile-topbar-marker");
      node.parentNode?.insertBefore(marker, node);
      return { node, parent: node.parentNode, marker };
    });

    left.insertBefore(wrapper, languageBox || left.firstChild);

    const query = window.matchMedia?.("(max-width: 1180px)");
    const setCompact = (compact) => {
      records.forEach(({ node, parent, marker }) => {
        if (compact) {
          panel.appendChild(node);
        } else if (parent && marker.parentNode === parent) {
          parent.insertBefore(node, marker);
        }
      });
    };
    setCompact(Boolean(query?.matches));
    query?.addEventListener?.("change", (event) => setCompact(event.matches));

    const toggle = $("[data-mobile-topbar-toggle]", wrapper);
    toggle?.addEventListener("click", () => {
      const open = wrapper.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    });
  }

  function updateTopbar() {
    const loginButton = $("[data-login-toggle]");
    const panelButton = $("[data-panel-button]");
    const boardButton = $("[data-board-button]");
    const linksButton = $("[data-links-button]");
    const avatar = $("[data-topbar-avatar]");
    if (loginButton) {
      loginButton.textContent = state.session ? t("logout") : t("login");
    }
    if (panelButton) {
      panelButton.textContent = t("panel");
    }
    if (boardButton) {
      boardButton.textContent = t("board");
    }
    if (linksButton) {
      linksButton.textContent = t("links");
    }
    const themeButton = $("[data-theme-button]");
    if (themeButton) {
      themeButton.textContent = t("theme");
    }
    const systemOption = $('[data-theme-option="system"]');
    const lightOption = $('[data-theme-option="light"]');
    const darkOption = $('[data-theme-option="dark"]');
    if (systemOption) systemOption.textContent = t("systemMode");
    if (lightOption) lightOption.textContent = t("lightMode");
    if (darkOption) darkOption.textContent = t("darkMode");
    const aboutButton = $("[data-about-button]");
    if (aboutButton) {
      aboutButton.textContent = t("about");
    }
    if (avatar) {
      avatar.onerror = () => { avatar.onerror = null; avatar.src = resolveMediaUrl(CONFIG.defaultAvatar || '/assets/img/default-avatar.svg'); };
      avatar.src = resolveMediaUrl(state.session?.avatarDataUrl || CONFIG.defaultAvatar);
    }
  }

  function initTopbarActions() {
    const loginButton = $("[data-login-toggle]");
    const panelButton = $("[data-panel-button]");
    const boardButton = $("[data-board-button]");
    const linksButton = $("[data-links-button]");
    const aboutButton = $("[data-about-button]");
    const searchButton = $("[data-search-open]");
    const avatarButton = $("[data-avatar-trigger]");
    const avatarInput = $("[data-avatar-input]");

    loginButton?.addEventListener("click", async () => {
      if (!state.session) {
        openRegisterModal();
        return;
      }
      openModal("confirm", {
        title: t("logoutConfirmTitle"),
        message: t("logoutConfirmMessage"),
        confirmText: t("logoutConfirmAction"),
        onConfirm: async () => {
          try {
            await api("/api/auth/logout", { method: "POST" });
            state.session = null;
            state.me = null;
            updateTopbar();
            toast(t("logoutSuccess"), "success");
            if (isPanel()) {
              renderPanelLoggedOut();
            }
          } catch (error) {
            toast(error.message || t("genericError"), "error");
          }
        }
      });
    });

    panelButton?.addEventListener("click", () => {
      if (!state.session) {
        toast(t("panelNeedLogin"), "error");
        openLoginModal();
        return;
      }
      const suffix = state.session?.uid ? `#${state.session.uid}` : "";
      const target = `${panelPath()}${suffix}`;
      if (!isPanel() || currentHashUid() !== String(state.session?.uid || "")) {
        navTo(target);
      }
    });

    boardButton?.addEventListener("click", () => {
      navTo(boardPath());
    });

    linksButton?.addEventListener("click", () => {
      navTo(linksPath());
    });

    aboutButton?.addEventListener("click", () => {
      navTo(aboutPath());
    });

    searchButton?.addEventListener("click", () => {
      const uid = window.prompt(t("searchUidPrompt"), "");
      if (!uid) return;
      const clean = String(uid).trim();
      if (!/^\d{1,8}$/.test(clean)) {
        toast(t("uidNotFound"), "error");
        return;
      }
      navTo(`${panelPath()}#${clean}`);
    });

    avatarButton?.addEventListener("click", () => {
      if (!state.session) {
        toast(t("avatarNeedLogin"), "error");
        openLoginModal();
        return;
      }
      avatarInput?.click();
    });

    avatarInput?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      if (!state.session) {
        toast(t("avatarNeedLogin"), "error");
        return;
      }
      try {
        await runWithLoader(async () => {
          const dataUrl = await fileToAvatarDataUrl(file);
          const result = await api("/api/avatar", { method: "POST", body: { avatarDataUrl: dataUrl } });
          state.session = result.user;
          updateTopbar();
          if (isPanel()) await loadPanel();
        });
        toast(t("avatarUpdated"), "success");
      } catch (error) {
        toast(error.message || t("genericError"), "error");
      }
    });
  }

  async function fileToAvatarDataUrl(file) {
    if (!file.type.startsWith("image/")) {
      throw new Error(t("invalidImageFile"));
    }
    const bitmap = await createImageBitmap(file);
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const side = Math.min(bitmap.width, bitmap.height);
    const sx = Math.floor((bitmap.width - side) / 2);
    const sy = Math.floor((bitmap.height - side) / 2);
    ctx.drawImage(bitmap, sx, sy, side, side, 0, 0, size, size);
    const dataUrl = canvas.toDataURL("image/webp", 0.86);
    if (dataUrl.length > 420000) {
      throw new Error(t("avatarTooLarge"));
    }
    return dataUrl;
  }

  async function loadSession() {
    try {
      const result = await api("/api/session", { useLoader: false });
      state.session = result.user || null;
    } catch {
      state.session = null;
    }
    updateTopbar();
  }

  function openModal(type, payload = {}) {
    state.modalType = type;
    state.modalPayload = payload;
    const root = $("[data-modal-root]");
    if (!root) return;
    root.innerHTML = renderModal(type, payload);
    root.classList.add("is-open");
    bindModalEvents(type, payload);
  }

  function closeModal() {
    const root = $("[data-modal-root]");
    if (!root) return;
    root.classList.remove("is-open");
    root.innerHTML = "";
    state.modalType = null;
    state.modalPayload = null;
  }

  function renderModal(type, payload) {
    const shellClass = type === "login" || type === "register" || type === "verify-registration" ? "modal-shell modal-shell--narrow" : "modal-shell";
    let body = "";

    if (type === "login") {
      body = `
        <div class="modal-head">
          <h2 class="modal-title">${escapeHtml(t("loginTitle"))}</h2>
          <button class="modal-close" type="button" data-modal-close>${escapeHtml(t("close"))}</button>
        </div>
        <form class="form-grid" data-login-form>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("yourEmailAddress"))}</span>
            <input class="form-control" type="email" name="email" autocomplete="email" required>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("yourPassword"))}</span>
            <input class="form-control" type="password" name="password" autocomplete="current-password" required>
          </label>
          <div class="form-actions">
            <button class="form-button form-button--primary" type="submit">${escapeHtml(t("loginAccount"))}</button>
            <button class="form-button form-button--secondary" type="button" data-open-register>${escapeHtml(t("register"))}</button>
          </div>
        </form>
      `;
    }

    if (type === "register") {
      body = `
        <div class="modal-head">
          <h2 class="modal-title">${escapeHtml(t("registerTitle"))}</h2>
          <button class="modal-close" type="button" data-modal-close>${escapeHtml(t("close"))}</button>
        </div>
        <form class="form-grid" data-register-form>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("yourUsername"))}</span>
            <input class="form-control" type="text" name="username" maxlength="30" placeholder="${escapeHtml(t("max30"))}" required>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("yourEmailAddress"))}</span>
            <input class="form-control" type="email" name="email" autocomplete="email" required>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("yourPassword"))}</span>
            <input class="form-control" type="password" name="password" autocomplete="new-password" required>
            <span class="password-strength" data-password-strength>
              <span class="password-strength__top">
                <span>${escapeHtml(t("passwordStrengthLabel"))}</span>
                <span data-password-strength-label>${escapeHtml(t("passwordStrengthEmpty"))}</span>
              </span>
              <span class="password-strength__bar"><span data-password-strength-bar></span></span>
            </span>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("retypePassword"))}</span>
            <input class="form-control" type="password" name="confirmPassword" autocomplete="new-password" required>
            <span class="form-row__hint" data-password-match></span>
          </label>
          <div class="form-actions">
            <button class="form-button form-button--primary" type="submit">${escapeHtml(t("doneRegistration"))}</button>
            <button class="form-button form-button--secondary" type="button" data-open-login>${escapeHtml(t("login"))}</button>
          </div>
        </form>
      `;
    }

    if (type === "verify-registration") {
      const email = payload.email || "";
      body = `
        <div class="modal-head">
          <h2 class="modal-title">${escapeHtml(t("verifyEmailTitle"))}</h2>
          <button class="modal-close" type="button" data-modal-close>${escapeHtml(t("close"))}</button>
        </div>
        <form class="form-grid" data-verify-registration-form>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("verificationCode"))}</span>
            <span class="form-row__hint">${escapeHtml(t("verificationHint").replace("{email}", email))}</span>
            <input class="form-control" type="text" name="code" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" required>
          </label>
          <div class="form-actions">
            <button class="form-button form-button--primary" type="submit">${escapeHtml(t("verifyAndCreate"))}</button>
            <button class="form-button form-button--secondary" type="button" data-open-register>${escapeHtml(t("register"))}</button>
          </div>
        </form>
      `;
    }

    if (type === "edit-profile") {
      const profile = payload.profile || {};
      const contacts = (profile.contacts?.length ? profile.contacts : Array.from({ length: 5 }, () => ({ type: "youtube", value: "", extraLabel: "" })))
        .slice(0, 5);
      while (contacts.length < 5) contacts.push({ type: "youtube", value: "", extraLabel: "" });

      const repos = normalizeRepoDrafts(profile.repos || []);
      if (!repos.length) {
        repos.push(blankRepoDraft());
      }

      body = `
        <div class="modal-head">
          <h2 class="modal-title">${escapeHtml(t("editingMaterials"))}</h2>
          <button class="modal-close" type="button" data-modal-close>${escapeHtml(t("close"))}</button>
        </div>
        <form class="form-grid" data-profile-form>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("bioLine1"))}</span>
            <textarea class="form-textarea" name="bioLine1" maxlength="400">${escapeHtml(profile.bioLine1 || "")}</textarea>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("bioLine2"))}</span>
            <textarea class="form-textarea" name="bioLine2" maxlength="240">${escapeHtml(profile.bioLine2 || "")}</textarea>
          </label>

          <div class="form-row">
            <span class="form-row__label">${escapeHtml(t("accountMethods"))}</span>
            <span class="form-row__hint">${escapeHtml(t("contactsHelp"))}</span>
            <div class="contact-editor" data-contact-editor>
              ${contacts.map((contact, index) => renderContactEditor(contact, index)).join("")}
            </div>
          </div>

          <div class="form-row">
            <span class="form-row__label">${escapeHtml(t("repositories"))}</span>
            <span class="form-row__hint">${escapeHtml(t("githubOnlyHint"))}</span>
            <div class="repo-editor-list" data-repo-editor-list>
              ${repos.map((repo, index) => renderRepoEditor(repo, index)).join("")}
            </div>
            <div class="form-actions">
              <button class="form-button form-button--secondary" type="button" data-add-repo>${escapeHtml(t("addRepo"))}</button>
            </div>
          </div>

          <div class="form-actions">
            <button class="form-button form-button--primary" type="submit">${escapeHtml(t("saveAndClose"))}</button>
            <button class="form-button form-button--secondary" type="button" data-modal-close>${escapeHtml(t("cancel"))}</button>
          </div>
        </form>
      `;
    }

    if (type === "confirm") {
      body = `
        <div class="modal-head">
          <h2 class="modal-title">${escapeHtml(payload.title || t("accountDeletion"))}</h2>
          <button class="modal-close" type="button" data-modal-close>${escapeHtml(t("close"))}</button>
        </div>
        <div class="form-grid">
          <div class="form-row">
            <span class="form-row__label">${escapeHtml(payload.message || t("cancelAccountConfirm"))}</span>
          </div>
          <div class="form-actions">
            <button class="form-button form-button--danger" type="button" data-confirm-action>${escapeHtml(payload.confirmText || t("accountDeletion"))}</button>
            <button class="form-button form-button--secondary" type="button" data-modal-close>${escapeHtml(t("cancel"))}</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="modal-overlay" data-modal-close></div>
      <div class="modal-wrap">
        <div class="${shellClass}">
          ${body}
        </div>
      </div>
    `;
  }

  function renderContactEditor(contact, index) {
    return `
      <div class="contact-chip" data-contact-chip="${index}">
        <div class="contact-chip__grid">
          <div class="inline-grid">
            <label class="form-row">
              <span class="form-row__label">${escapeHtml(t("contactType"))}</span>
              <select class="form-select" name="contactType">
                ${CONTACT_TYPES.map((type) => `<option value="${type}" ${contact.type === type ? "selected" : ""}>${escapeHtml(CONTACT_TYPE_LABEL[type] || type)}</option>`).join("")}
              </select>
            </label>
            <label class="form-row">
              <span class="form-row__label">${escapeHtml(t("contactLabel"))}</span>
              <input class="form-control" type="text" name="contactLabel" maxlength="120" value="${escapeHtml(contact.extraLabel || "")}">
            </label>
          </div>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("contactValue"))}</span>
            <input class="form-control" type="text" name="contactValue" maxlength="220" value="${escapeHtml(contact.value || "")}">
          </label>
        </div>
      </div>
    `;
  }

  function renderRepoEditor(repo, index) {
    const draft = normalizeRepoDraft(repo);
    return `
      <div class="repo-editor" data-repo-editor="${index}">
        <div class="repo-editor__grid">
          <input type="hidden" name="repoId" value="${escapeHtml(draft.id)}">
          <div class="inline-grid">
            <label class="form-row">
              <span class="form-row__label">${escapeHtml(t("repositoryName"))}</span>
              <input class="form-control" type="text" name="repoName" maxlength="120" value="${escapeHtml(draft.name)}" placeholder="${escapeHtml(t("repositoryNameHint"))}">
            </label>
            <label class="form-row">
              <span class="form-row__label">${escapeHtml(t("repositoryUrl"))}</span>
              <input class="form-control" type="text" name="repoInput" maxlength="240" value="${escapeHtml(draft.repoInput)}">
            </label>
          </div>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("descriptionEn"))}</span>
            <textarea class="form-textarea" name="descriptionEn" maxlength="500">${escapeHtml(draft.descriptionEn)}</textarea>
          </label>
          <label class="form-row">
            <span class="form-row__label">${escapeHtml(t("descriptionZh"))}</span>
            <textarea class="form-textarea" name="descriptionZh" maxlength="500">${escapeHtml(draft.descriptionZh)}</textarea>
          </label>
          <button class="repo-editor__remove" type="button" data-remove-repo>${escapeHtml(t("removeItem"))}</button>
        </div>
      </div>
    `;
  }

  function syncRepoEditorIndices(root) {
    if (!root) return;
    $$("[data-repo-editor]", root).forEach((node, index) => {
      node.dataset.repoEditor = String(index);
    });
  }

  function bindModalEvents(type, payload) {
    const root = $("[data-modal-root]");
    if (!root) return;
    $$("[data-modal-close]", root).forEach((node) => {
      node.addEventListener("click", closeModal);
    });

    if (type === "login") {
      $("[data-open-register]", root)?.addEventListener("click", () => openRegisterModal());
      $("[data-login-form]", root)?.addEventListener("submit", handleLoginSubmit);
    }

    if (type === "register") {
      $("[data-open-login]", root)?.addEventListener("click", () => openLoginModal());
      const registerForm = $("[data-register-form]", root);
      bindRegisterPasswordHints(registerForm);
      registerForm?.addEventListener("submit", handleRegisterSubmit);
    }

    if (type === "verify-registration") {
      $("[data-open-register]", root)?.addEventListener("click", () => openRegisterModal());
      $("[data-verify-registration-form]", root)?.addEventListener("submit", handleVerifyRegistrationSubmit);
    }

    if (type === "edit-profile") {
      const list = $("[data-repo-editor-list]", root);
      $("[data-add-repo]", root)?.addEventListener("click", () => {
        if (!list) return;
        const index = $$("[data-repo-editor]", list).length;
        const wrap = document.createElement("div");
        wrap.innerHTML = renderRepoEditor(blankRepoDraft(), index);
        const next = wrap.firstElementChild;
        if (!next) return;
        list.appendChild(next);
        syncRepoEditorIndices(list);
      });
      bindRepoRemoveButtons(list);
      syncRepoEditorIndices(list);
      $("[data-profile-form]", root)?.addEventListener("submit", handleProfileSubmit);
    }

    if (type === "confirm") {
      $("[data-confirm-action]", root)?.addEventListener("click", async () => {
        if (typeof payload.onConfirm === "function") {
          await payload.onConfirm();
        }
        closeModal();
      });
    }
  }

  function bindRepoRemoveButtons(root) {
    if (!root || root.dataset.repoRemoveBound === "1") return;
    root.dataset.repoRemoveBound = "1";
    root.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-repo]");
      if (!button || !root.contains(button)) return;
      event.preventDefault();
      const item = button.closest("[data-repo-editor]");
      item?.remove();
      syncRepoEditorIndices(root);
    });
  }

  function openLoginModal() {
    openModal("login");
  }

  function openRegisterModal() {
    openModal("register");
  }

  function openVerifyRegistrationModal(payload) {
    openModal("verify-registration", payload);
  }

  function passwordStrength(password) {
    const value = String(password || "");
    if (!value) return { score: 0, key: "passwordStrengthEmpty" };
    let score = 0;
    if (value.length >= 8) score += 1;
    if (value.length >= 12) score += 1;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 1;
    if (/\d/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    if (score <= 2) return { score: 1, key: "passwordStrengthWeak" };
    if (score === 3) return { score: 2, key: "passwordStrengthFair" };
    if (score === 4) return { score: 3, key: "passwordStrengthGood" };
    return { score: 4, key: "passwordStrengthStrong" };
  }

  function updateRegisterPasswordHints(form) {
    if (!form) return;
    const password = form.password?.value || "";
    const confirmPassword = form.confirmPassword?.value || "";
    const strength = passwordStrength(password);
    const strengthWrap = $("[data-password-strength]", form);
    const strengthLabel = $("[data-password-strength-label]", form);
    const strengthBar = $("[data-password-strength-bar]", form);
    if (strengthWrap) strengthWrap.dataset.strength = String(strength.score);
    if (strengthLabel) strengthLabel.textContent = t(strength.key);
    if (strengthBar) strengthBar.style.width = `${Math.max(strength.score, password ? 1 : 0) * 25}%`;

    const match = $("[data-password-match]", form);
    if (!match) return;
    if (!confirmPassword || password === confirmPassword) {
      match.textContent = "";
      match.dataset.state = "";
      return;
    }
    match.textContent = t("passwordMismatch");
    match.dataset.state = "error";
  }

  function bindRegisterPasswordHints(form) {
    if (!form) return;
    updateRegisterPasswordHints(form);
    form.password?.addEventListener("input", () => updateRegisterPasswordHints(form));
    form.confirmPassword?.addEventListener("input", () => updateRegisterPasswordHints(form));
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      email: form.email.value.trim(),
      password: form.password.value
    };
    try {
      const result = await api("/api/auth/login", { method: "POST", body });
      state.session = result.user;
      updateTopbar();
      closeModal();
      toast(t("loginSuccess"), "success");
      if (isPanel()) await loadPanel();
    } catch (error) {
      if (error.payload?.code === "EMAIL_NOT_FOUND") {
        toast(t("emailMissing"), "error");
      } else if (error.payload?.code === "PASSWORD_INCORRECT") {
        toast(t("existsWrongPassword"), "error");
      } else if (error.payload?.code === "BAD_EMAIL") {
        toast(t("emailInvalid"), "error");
      } else {
        toast(error.message || t("genericError"), "error");
      }
    }
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      username: form.username.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
      confirmPassword: form.confirmPassword.value
    };
    if (body.password !== body.confirmPassword) {
      updateRegisterPasswordHints(form);
      toast(t("passwordMismatch"), "error");
      return;
    }
    try {
      await api("/api/auth/register", { method: "POST", body });
      toast(t("verificationSent"), "success");
      openVerifyRegistrationModal({ email: body.email });
    } catch (error) {
      if (error.payload?.code === "BAD_USERNAME") {
        toast(t("usernameInvalid"), "error");
      } else if (error.payload?.code === "BAD_EMAIL") {
        toast(t("emailInvalid"), "error");
      } else if (error.payload?.code === "BAD_PASSWORD") {
        toast(t("passwordInvalid"), "error");
      } else if (error.payload?.code === "PASSWORD_MISMATCH") {
        toast(t("passwordMismatch"), "error");
      } else if (error.payload?.code === "EMAIL_EXISTS") {
        toast(t("emailExists"), "error");
      } else if (error.payload?.code === "MAIL_ERROR") {
        toast(t("mailError"), "error");
      } else {
        toast(error.message || t("genericError"), "error");
      }
    }
  }

  async function handleVerifyRegistrationSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = {
      email: state.modalPayload?.email || "",
      code: form.code.value.trim()
    };
    try {
      const result = await api("/api/auth/verify-registration", { method: "POST", body });
      state.session = result.user;
      updateTopbar();
      closeModal();
      toast(t("registerSuccess"), "success");
      if (isPanel()) await loadPanel();
    } catch (error) {
      if (error.payload?.code === "BAD_CODE") {
        toast(t("verificationInvalid"), "error");
      } else if (error.payload?.code === "CODE_EXPIRED") {
        toast(t("verificationExpired"), "error");
      } else if (error.payload?.code === "TOO_MANY_ATTEMPTS") {
        toast(t("verificationTooMany"), "error");
      } else if (error.payload?.code === "EMAIL_EXISTS") {
        toast(t("emailExists"), "error");
      } else {
        toast(error.message || t("genericError"), "error");
      }
    }
  }

  async function handleProfileSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const contacts = $$("[data-contact-chip]", form).map((chip) => {
      const type = $('[name="contactType"]', chip)?.value || "youtube";
      const value = $('[name="contactValue"]', chip)?.value?.trim() || "";
      const extraLabel = $('[name="contactLabel"]', chip)?.value?.trim() || "";
      return { type, value, extraLabel };
    }).filter((item) => item.value);

    const repos = $$("[data-repo-editor]", form).map((card) => {
      const id = $('[name="repoId"]', card)?.value?.trim() || "";
      const name = $('[name="repoName"]', card)?.value?.trim() || "";
      const repoInput = $('[name="repoInput"]', card)?.value?.trim() || "";
      const descriptionEn = $('[name="descriptionEn"]', card)?.value?.trim() || "";
      const descriptionZh = $('[name="descriptionZh"]', card)?.value?.trim() || "";
      return { id, name, repoInput, descriptionEn, descriptionZh };
    }).filter((item) => item.repoInput);

    const body = {
      bioLine1: form.bioLine1.value.trim(),
      bioLine2: form.bioLine2.value.trim(),
      contacts,
      repos,
      lang: LANG
    };

    try {
      const result = await api("/api/profile", { method: "POST", body });
      state.me = result.profile;
      state.session = result.user;
      updateTopbar();
      closeModal();
      toast(t("saveSuccess"), "success");
      await loadPanel();
      if (isHome()) await loadHome();
    } catch (error) {
      toast(error.message || t("genericError"), "error");
    }
  }

  async function loadHome() {
    const host = $("[data-public-profile]");
    const list = $("[data-projects-list]");
    if (!host || !list) return;

    host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(t("loading"))}</div>`;
    list.innerHTML = "";

    try {
      const result = await api(`/api/site-profile?lang=${encodeURIComponent(LANG)}`);
      state.publicProfile = result.profile;
      host.innerHTML = renderPublicProfile(result.profile);
      renderRepoCards(list, result.profile?.repos || []);
    } catch (error) {
      const fallbackProfile = buildLocalHomeProfile();
      try {
        fallbackProfile.repos = await fetchTouhouDebianRepos();
      } catch (_) {
        fallbackProfile.repos = [];
      }
      state.publicProfile = fallbackProfile;
      host.innerHTML = renderPublicProfile(fallbackProfile);
      renderRepoCards(list, fallbackProfile.repos || []);
    }
  }

  function renderPublicProfile(profile) {
    const avatarUrl = resolveMediaUrl(profile.avatarDataUrl || "./assets/img/user.png");
    const username = escapeHtml(profile.username || "THDeb (TouhouDebian)");
    const usernameClass = profile.role === "admin" ? "username username--admin" : "username";
    const bioLine1 = escapeHtml(profile.bioLine1 || t("welcomeFallback"));
    const bioLine2 = profile.bioLine2
      ? escapeHtml(profile.bioLine2)
      : escapeHtml(t("noAccountInfoYet", { name: profile.username || "admin" }));

    return `
      <div class="profile-head">
        <div class="avatar-ring">
          <img src="${avatarUrl}" alt="${username}">
        </div>
        <div class="profile-copy">
          <h1 class="${usernameClass}">${username}</h1>
          <p class="lead">${bioLine1}</p>
          <p class="sublead">${bioLine2}</p>
        </div>
      </div>
      <div class="contact-list">
        ${profile.hideEmptyContacts && !(profile.contacts || []).length ? "" : renderContacts(profile.contacts || [], profile.username || "")}
      </div>
    `;
  }

  function renderContacts(contacts, ownerName = "") {
    if (!contacts.length) {
      const fallbackName = ownerName || (LANG === "zh-CN" ? "该用户" : "this user");
      return `<p class="panel-bio panel-bio--fallback">${escapeHtml(t("noAccountMethodsYet", { name: fallbackName }))}</p>`;
    }
    return contacts.map((contact) => {
      const type = contact.type || "github";
      const icon = resolveMediaUrl(CONTACT_ICON[type] || CONTACT_ICON.github);
      const value = escapeHtml(contact.value || "");
      const extra = escapeHtml(contact.extraLabel || "");
      const basePlatformLabel = CONTACT_TYPE_LABEL[type] || type;
      const platformLabel = extra
        ? t("contactUsername", { platform: basePlatformLabel, name: extra })
        : basePlatformLabel;
      const platformLine = `<span class="contact-platform">${escapeHtml(platformLabel)}</span>`;
      let content = "";

      if (type === "youtube") {
        const href = escapeAttribute(normalizeExternalLink(contact.value));
        content = `${platformLine}<a class="link-line" href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      } else if (type === "bilibili") {
        const href = escapeAttribute(normalizeExternalLink(contact.value));
        content = `${platformLine}<a class="link-line" href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      } else if (type === "qq") {
        content = `${platformLine}<span class="green-text">${value}</span>`;
      } else if (type === "gmail") {
        content = `${platformLine}<span class="green-text">${value}</span>`;
      } else if (type === "twitter") {
        const raw = String(contact.value || "").trim();
        const href = escapeAttribute(normalizeTwitterLink(raw));
        content = `${platformLine}<a class="link-line" href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      } else if (type === "discord") {
        const href = escapeAttribute(normalizeExternalLink(contact.value));
        content = `${platformLine}<a class="link-line" href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      } else {
        const href = escapeAttribute(normalizeExternalLink(contact.value));
        content = `${platformLine}<a class="link-line" href="${href}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      }

      return `
        <div class="contact-row">
          <img class="contact-icon" src="${icon}" alt="" width="128" height="128">
          <div class="contact-main">${content}</div>
        </div>
      `;
    }).join("");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("\n", "");
  }

  function normalizeExternalLink(value) {
    if (!value) return "#";
    if (/^https?:\/\//i.test(value)) return value;
    return `https://${value}`;
  }

  function normalizeTwitterLink(value) {
    const raw = String(value || "").trim();
    if (!raw) return "#";
    if (/^https?:\/\//i.test(raw)) return raw;
    const handle = raw.replace(/^@/, "").replace(/^twitter\.com\//i, "").replace(/^https?:\/\/(www\.)?twitter\.com\//i, "");
    if (!handle) return "#";
    return `https://twitter.com/${encodeURIComponent(handle)}`;
  }

  function userPanelHref(uid) {
    const safeUid = String(uid || "").trim();
    return `${panelPath()}#${safeUid}`;
  }

  function renderUserIdentity(user, options = {}) {
    const safeUid = escapeHtml(user?.uid || "");
    const safeName = escapeHtml(user?.username || "");
    const nameClass = user?.role === "admin" ? "admin-gold" : "green-text";
    const avatar = escapeAttribute(resolveMediaUrl(user?.avatarDataUrl || CONFIG.defaultAvatar));
    const compact = options.compact ? ' avatar-ring--tiny' : ' avatar-ring--small';
    const href = escapeAttribute(userPanelHref(user?.uid || ""));
    return `
      <a class="user-identity${options.compact ? ' user-identity--compact' : ''}" href="${href}" data-user-link="${safeUid}">
        <span class="avatar-ring${compact}"><img src="${avatar}"${avatarFallbackAttr()} alt=""></span>
        <span class="user-identity__meta">
          <span class="${nameClass}">${safeName}</span>
          <span class="admin-user__email">#${safeUid}</span>
        </span>
      </a>
    `;
  }

  const BOARD_REACTION_EMOJIS = ["👍", "❤️", "😂", "🎉", "😮", "😢", "❔", "❓", "🌹", "🥀", "🤔", "🤯", "💀", "😭", "✅", "❌"];
  const BOARD_REACTION_KEYS = ["thumbs_up", "heart", "laugh", "party", "surprised", "sad", "question_white", "question_red", "rose", "wilted_rose", "thinking", "mind_blown", "skull", "crying", "check", "cross"];

  function renderReactionBar(targetType, targetId, reactions = []) {
    const activeEmojis = new Set();
    const visibleReactions = reactions
      .map((reaction) => ({
        emoji: String(reaction?.emoji || ""),
        count: Number(reaction?.count || 0),
        active: Boolean(reaction?.active)
      }))
      .filter((reaction) => BOARD_REACTION_EMOJIS.includes(reaction.emoji) && reaction.count > 0);
    reactions.forEach((reaction) => {
      if (reaction?.active) activeEmojis.add(String(reaction?.emoji || ""));
    });
    return `
      <div class="reaction-bar" data-reaction-group>
        <div class="reaction-bar__summary">
          ${visibleReactions.map((reaction) => {
            const index = BOARD_REACTION_EMOJIS.indexOf(reaction.emoji);
            return `
            <button class="reaction-button${reaction.active ? " is-active" : ""}" type="button" data-reaction-target-type="${escapeAttribute(targetType)}" data-reaction-target-id="${escapeAttribute(String(targetId))}" data-reaction-index="${index}" data-reaction-key="${escapeAttribute(BOARD_REACTION_KEYS[index] || "")}" aria-pressed="${reaction.active ? "true" : "false"}">
              <span class="reaction-button__emoji">${escapeHtml(reaction.emoji)}</span>
              <span class="reaction-button__count">${escapeHtml(String(reaction.count))}</span>
            </button>
          `}).join("")}
        </div>
        <div class="reaction-add">
          <button class="reaction-add-button" type="button" data-toggle-reaction-menu aria-expanded="false">${escapeHtml(t("addReaction"))}</button>
          <div class="reaction-picker" data-reaction-picker hidden>
            ${BOARD_REACTION_EMOJIS.map((emoji, index) => `
              <button class="reaction-picker__button${activeEmojis.has(emoji) ? " is-active" : ""}" type="button" data-reaction-target-type="${escapeAttribute(targetType)}" data-reaction-target-id="${escapeAttribute(String(targetId))}" data-reaction-index="${index}" data-reaction-key="${escapeAttribute(BOARD_REACTION_KEYS[index] || "")}" aria-pressed="${activeEmojis.has(emoji) ? "true" : "false"}">${escapeHtml(emoji)}</button>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderBoardComment(comment) {
    return `
      <div class="board-comment" data-comment-id="${escapeHtml(String(comment.id || ""))}">
        ${renderUserIdentity(comment.author || {}, { compact: true })}
        <div class="board-comment__content">
          <div class="board-comment__body">${escapeHtml(comment.body || "")}</div>
          ${renderReactionBar("comment", comment.id || "", comment.reactions || [])}
        </div>
        ${comment.canDelete ? `<div class="board-comment__actions"><button class="user-action__button user-action__button--danger" type="button" data-delete-comment>${escapeHtml(t("deleteComment"))}</button></div>` : ""}
      </div>
    `;
  }

  function renderRepoCards(host, repos) {
    const COLLAPSED_REPO_LIMIT = 3;
    if (!repos.length) {
      host.innerHTML = `<p class="empty-state">${escapeHtml(t("repoEmpty"))}</p>`;
      return;
    }

    const shouldCollapse = repos.length > COLLAPSED_REPO_LIMIT;
    const cardsMarkup = repos.map((repo, index) => {
      const repoLabel = escapeHtml(repo.name || repo.repoName || repo.fullName || "");
      const href = escapeAttribute(repo.url || `https://github.com/${repo.fullName || ""}`);
      const desc = escapeHtml((LANG === "zh-CN" ? (repo.descriptionZh || repo.descriptionEn) : (repo.descriptionEn || repo.descriptionZh || "")));
      const isInitiallyHidden = shouldCollapse && index >= COLLAPSED_REPO_LIMIT;
      return `
        <article class="project-card${isInitiallyHidden ? " project-card--collapsed-hidden" : ""}">
          <div class="project-card__head">
            <div class="project-card__titleline">
              <span class="project-card__name">${repoLabel}</span>
              <span class="project-card__colon">:</span>
              <a class="project-card__link" href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>
            </div>
            <button class="project-card__toggle" type="button" aria-expanded="false" aria-controls="project-body-${index}">
              <span class="project-card__toggle-text">⌄</span>
              <span class="visually-hidden">${escapeHtml(t("toggleDescription"))}</span>
            </button>
          </div>
          <div class="project-card__body" id="project-body-${index}">
            <div class="project-card__body-inner">
              <p class="project-card__description">${desc}</p>
            </div>
          </div>
        </article>
      `;
    }).join("");

    host.innerHTML = `${cardsMarkup}${shouldCollapse ? `
      <button class="projects-list__expand" type="button" data-expand-repos>
        （${escapeHtml(t("expandAllRepos"))}）
      </button>
      <button class="projects-list__expand projects-list__collapse" type="button" data-collapse-repos hidden>
        ${escapeHtml(t("collapseRepos"))}
      </button>
    ` : ""}`;

    $$(".project-card", host).forEach((card) => {
      const toggle = $(".project-card__toggle", card);
      const text = $(".project-card__toggle-text", card);
      toggle?.addEventListener("click", () => {
        const open = !card.classList.contains("is-open");
        card.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        if (text) text.textContent = open ? "⌃" : "⌄";
      });
    });

    $("[data-expand-repos]", host)?.addEventListener("click", (event) => {
      $$(".project-card--collapsed-hidden", host).forEach((card) => {
        card.classList.remove("project-card--collapsed-hidden");
      });
      event.currentTarget.hidden = true;
      const collapseButton = $("[data-collapse-repos]", host);
      if (collapseButton) collapseButton.hidden = false;
    });

    $("[data-collapse-repos]", host)?.addEventListener("click", (event) => {
      $$(".project-card", host).forEach((card, index) => {
        if (index >= COLLAPSED_REPO_LIMIT) {
          card.classList.add("project-card--collapsed-hidden");
          card.classList.remove("is-open");
          const toggle = $(".project-card__toggle", card);
          const text = $(".project-card__toggle-text", card);
          toggle?.setAttribute("aria-expanded", "false");
          if (text) text.textContent = "⌄";
        }
      });
      event.currentTarget.hidden = true;
      const expandButton = $("[data-expand-repos]", host);
      if (expandButton) expandButton.hidden = false;
    });
  }

  function renderPanelLoggedOut() {
    const host = $("[data-user-panel]");
    const adminSection = $("[data-admin-section]");
    const adminUsers = $("[data-admin-users]");
    if (host) {
      host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(t("notLoggedInPanel"))}</div>`;
    }
    if (adminSection) adminSection.hidden = true;
    if (adminUsers) adminUsers.innerHTML = "";
  }

  async function loadPanel() {
    const host = $("[data-user-panel]");
    const actions = $(".panel-actions");
    if (!host) return;

    const requestedUid = currentHashUid();
    const ownUid = state.session?.uid || "";
    const viewingPublic = requestedUid && requestedUid !== ownUid;

    if (!viewingPublic) removePanelBackToTop();

    if (!state.session && !requestedUid) {
      renderPanelLoggedOut();
      openLoginModal();
      return;
    }

    host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(t("loading"))}</div>`;

    try {
      if (viewingPublic) {
        const result = await api(`/api/user-by-uid?uid=${encodeURIComponent(requestedUid)}&lang=${encodeURIComponent(LANG)}`);
        host.innerHTML = renderUserPanel(result.profile, true);
        renderRepoCards($("[data-panel-repo-list]"), result.profile?.repos || []);
        ensurePanelBackToTop();
        if (actions) actions.hidden = true;
        const adminSection = $("[data-admin-section]");
        if (adminSection) adminSection.hidden = true;
        return;
      }

      const result = await api(`/api/me?lang=${encodeURIComponent(LANG)}`);
      state.me = result.profile;
      state.session = result.user;
      updateTopbar();
      if (!window.location.hash && state.me?.uid) {
        history.replaceState(null, "", `${panelPath()}#${state.me.uid}`);
      }
      host.innerHTML = renderUserPanel(result.profile, false);
      await renderPanelRepoCards();
      if (actions) actions.hidden = false;

      const editButton = $("[data-edit-profile]");
      const cancelButton = $("[data-cancel-account]");
      editButton?.addEventListener("click", () => openModal("edit-profile", { profile: state.me }));
      cancelButton?.addEventListener("click", () => {
        if (state.session?.role === "admin") {
          toast(t("adminCannotDeleteSelf"), "error");
          return;
        }
        openModal("confirm", {
          title: t("accountDeletion"),
          message: t("cancelAccountConfirm"),
          confirmText: t("accountDeletion"),
          onConfirm: async () => {
            await api("/api/auth/cancel-self", { method: "DELETE" });
            state.session = null;
            state.me = null;
            updateTopbar();
            toast(t("cancelAccountSuccess"), "success");
            navTo(homePath());
          }
        });
      });

      if (state.session?.role === "admin") {
        await loadAdminUsers();
      } else {
        const adminSection = $("[data-admin-section]");
        if (adminSection) adminSection.hidden = true;
      }
    } catch (error) {
      host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(error.message || t("genericError"))}</div>`;
    }
  }

  function renderUserPanel(profile, viewOnly = false) {
    const avatarUrl = resolveMediaUrl(profile.avatarDataUrl || CONFIG.defaultAvatar);
    const username = escapeHtml(profile.username || "");
    const usernameClass = profile.role === "admin" ? "username username--admin" : "username";
    const email = escapeHtml(profile.email || "");
    const uid = escapeHtml(profile.uid || "");
    const bioLine1 = escapeHtml(profile.bioLine1 || t("welcomeFallback"));
    const bioLine2 = profile.bioLine2
      ? escapeHtml(profile.bioLine2)
      : escapeHtml(t("noAccountInfoYet", { name: profile.username || "user" }));

    return `
      <div class="user-panel__head">
        <div class="avatar-ring">
          <img src="${avatarUrl}" alt="${username}">
        </div>
        <div class="user-panel__meta">
          <h1 class="${usernameClass}">${username}</h1>
          ${uid ? `<p class="panel-email">UID: ${uid}</p>` : ""}
          ${email ? `<p class="panel-email">${email}</p>` : ""}
          <p class="panel-bio">${bioLine1}</p>
          <p class="panel-bio ${profile.bioLine2 ? "" : "panel-bio--fallback"}">${bioLine2}</p>
          <p class="panel-bio panel-bio--fallback">${escapeHtml(viewOnly ? t("viewOnlyPanel") : t("changeAvatarHint"))}</p>
        </div>
      </div>

      <div class="panel-content">
        <div class="panel-group">
          <h2 class="section-title">${escapeHtml(t("accountInformation"))}</h2>
          <div class="contact-list">${renderContacts(profile.contacts || [], profile.username || "")}</div>
        </div>
        <div class="panel-group">
          <h2 class="section-title">${escapeHtml(t("currentRepos"))}</h2>
          <div class="repo-list-public" data-panel-repo-list></div>
        </div>
      </div>
    `;
  }

  async function loadAdminUsers() {
    const adminSection = $("[data-admin-section]");
    const host = $("[data-admin-users]");
    if (!adminSection || !host) return;
    adminSection.hidden = false;
    host.innerHTML = `<div class="empty-state">${escapeHtml(t("loading"))}</div>`;

    try {
      const result = await api(`/api/admin/users?lang=${encodeURIComponent(LANG)}`);
      state.adminUsers = result.users || [];
      const toolbar = `<div class="admin-toolbar"><button class="panel-actions__button panel-actions__button--danger" type="button" data-admin-delete-by-uid>${escapeHtml(t("adminDeleteByUid"))}</button><button class="panel-actions__button panel-actions__button--primary" type="button" data-admin-grant-by-uid>${escapeHtml(t("grantPermissionByUid"))}</button></div>`;
      if (!state.adminUsers.length) {
        host.innerHTML = `${toolbar}<div class="empty-state">${escapeHtml(t("adminUsersEmpty"))}</div>`;
      } else {
        host.innerHTML = toolbar + state.adminUsers.map((user) => renderAdminUser(user)).join("");
      }
      bindAdminUserActions(host);
    } catch (error) {
      host.innerHTML = `<div class="empty-state">${escapeHtml(error.message || t("genericError"))}</div>`;
    }
  }

  function renderAdminUser(user) {
    const selfMark = user.isCurrentUser ? ` · ${escapeHtml(t("currentUser"))}` : "";
    const roleLabel = user.role === "admin" ? t("roleAdmin") : t("roleUser");
    const mutedMark = user.muted ? ` · ${escapeHtml(t("mutedUser"))}` : "";
    const canMute = user.role !== "admin" && !user.isCurrentUser;
    const nameClass = user.role === "admin" ? "admin-gold" : "";
    return `
      <article class="admin-user" data-user-id="${escapeHtml(String(user.id))}">
        <div class="admin-user__head">
          <div>
            <div class="admin-user__name"><span class="${nameClass}">${escapeHtml(user.username)}</span> <span class="green-text">(${escapeHtml(roleLabel)}${selfMark}${mutedMark})</span></div>
            <div class="admin-user__email">UID: ${escapeHtml(user.uid || "")}</div>
            <div class="admin-user__email">${escapeHtml(user.email || "")}</div>
          </div>
          ${canMute ? `<button class="user-action__button ${user.muted ? "" : "user-action__button--danger"}" type="button" data-admin-toggle-mute data-muted="${user.muted ? "1" : "0"}" data-user-uid="${escapeAttribute(user.uid || "")}">${escapeHtml(user.muted ? t("unmuteUser") : t("muteUser"))}</button>` : ""}

        </div>
        <div class="admin-user__body">
          <div class="empty-state">${escapeHtml(user.bioLine2 || t("noAccountInfoYet", { name: user.username }))}</div>
          <div class="admin-repos">
            ${(user.repos || []).map((repo) => `
              <div class="admin-repo-item" data-repo-id="${escapeHtml(String(repo.id))}">
                <div>
                  <div class="project-card__name">${escapeHtml(repo.name || repo.fullName)}</div>
                  <a class="mono-link" href="${escapeAttribute(repo.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.url)}</a>
                </div>
                <button class="user-action__button user-action__button--danger" type="button" data-admin-delete-repo>${escapeHtml(t("deleteRepo"))}</button>
              </div>
            `).join("") || `<div class="empty-state">${escapeHtml(t("repoEmpty"))}</div>`}
          </div>
        </div>
      </article>
    `;
  }

  function bindAdminUserActions(host) {
    $("[data-admin-delete-by-uid]", host)?.addEventListener("click", async () => {
      const uid = window.prompt(t("adminDeleteByUidPrompt"), "");
      if (!uid) return;
      const clean = String(uid).trim();
      if (clean === "01100001") {
        toast(t("uidCannotDeleteAdmin"), "error");
        return;
      }
      try {
        await api("/api/admin/cancel-user", { method: "POST", body: { uid: clean } });
        toast(t("adminDeletedUser"), "success");
        await loadAdminUsers();
      } catch (error) {
        toast(error.message || t("genericError"), "error");
      }
    });

    $("[data-admin-grant-by-uid]", host)?.addEventListener("click", async () => {
      const uid = window.prompt(t("grantPermissionByUidPrompt"), "");
      if (!uid) return;
      const clean = String(uid).trim();
      try {
        const result = await api("/api/admin/grant-user", { method: "POST", body: { uid: clean } });
        toast(result?.alreadyAdmin ? t("adminAlreadyGranted") : t("adminGrantedUser"), "success");
        await loadAdminUsers();
      } catch (error) {
        toast(error.message || t("genericError"), "error");
      }
    });

    $$("[data-admin-delete-repo]", host).forEach((button) => {
      button.addEventListener("click", () => {
        const repoEl = button.closest("[data-repo-id]");
        const repoId = Number(repoEl?.dataset.repoId);
        if (!repoId) return;
        openModal("confirm", {
          title: t("deleteRepo"),
          message: t("deleteRepoConfirm"),
          confirmText: t("deleteRepo"),
          onConfirm: async () => {
            await api("/api/admin/delete-repo", { method: "POST", body: { repoId } });
            toast(t("adminDeletedRepo"), "success");
            await loadAdminUsers();
          }
        });
      });
    });

    $$("[data-admin-toggle-mute]", host).forEach((button) => {
      button.addEventListener("click", async () => {
        const uid = button.dataset.userUid || "";
        const shouldMute = button.dataset.muted !== "1";
        if (!uid) return;
        try {
          await api("/api/admin/mute-user", { method: "POST", body: { uid, muted: shouldMute } });
          toast(shouldMute ? t("userMutedSuccess") : t("userUnmutedSuccess"), "success");
          await loadAdminUsers();
        } catch (error) {
          toast(error.message || t("genericError"), "error");
        }
      });
    });
  }

  async function renderPanelRepoCards() {
    const host = $("[data-panel-repo-list]");
    if (!host || !state.me) return;
    renderRepoCards(host, state.me.repos || []);
  }

  function renderBoardEditor() {
    const host = $("[data-board-editor]");
    if (!host) return;
    host.innerHTML = `
      <div class="board-page-heading">${escapeHtml(t("boardTitle"))}</div>
      <div class="section-card board-editor-card">
        <div class="board-compose">
          <textarea class="form-textarea board-compose__textarea" data-board-post-body placeholder="${escapeHtml(t("createPostPlaceholder"))}"></textarea>
          <div class="form-actions board-compose__actions">
            <button class="form-button form-button--primary" type="button" data-board-post-submit>${escapeHtml(t("publishPost"))}</button>
          </div>
        </div>
      </div>
    `;
    $("[data-board-post-submit]", host)?.addEventListener("click", async () => {
      if (!state.session) {
        toast(t("boardNeedLogin"), "error");
        openLoginModal();
        return;
      }
      const textarea = $("[data-board-post-body]", host);
      const body = String(textarea?.value || "").trim();
      if (!body || body.length > 4000) {
        toast(t("postBodyInvalid"), "error");
        return;
      }
      try {
        await api("/api/posts", { method: "POST", body: { body } });
        if (textarea) textarea.value = "";
        await loadBoard();
      } catch (error) {
        toast(error.message || t("genericError"), "error");
      }
    });
  }

  function formatTime(ts) {
    if (!ts) return "";
    const d = new Date(Number(ts) * 1000);
    return d.toLocaleString(LANG === "zh-CN" ? "zh-CN" : "en-US");
  }

  const BOARD_POST_COLLAPSE_LIMIT = 500;

  function renderBoardPostBody(post) {
    const body = String(post?.body || "");
    if (body.length <= BOARD_POST_COLLAPSE_LIMIT) {
      return `<div class="board-post__body">${escapeHtml(body)}</div>`;
    }

    const preview = body.slice(0, BOARD_POST_COLLAPSE_LIMIT).trimEnd();
    return `
      <div class="board-post__body board-post__body--collapsed" data-post-body>
        <span data-post-preview>${escapeHtml(preview)}...</span>
        <span data-post-full hidden>${escapeHtml(body)}</span>
      </div>
      <button class="board-post__toggle" type="button" data-toggle-post-body aria-expanded="false">${escapeHtml(t("expandPost"))}</button>
    `;
  }

  function compareBoardPosts(a, b) {
    const left = Number(a?.createdAt || 0);
    const right = Number(b?.createdAt || 0);
    if (state.boardSort === "hot") {
      const leftComments = Number(a?.commentCount ?? a?.comments?.length ?? 0);
      const rightComments = Number(b?.commentCount ?? b?.comments?.length ?? 0);
      return rightComments - leftComments || right - left;
    }
    return state.boardSort === "oldest" ? left - right : right - left;
  }

  function renderBoardSortControls() {
    return `
      <div class="board-sort">
        <span class="board-sort__label">${escapeHtml(t("boardSortLabel"))}</span>
        <div class="board-sort__options" role="group" aria-label="${escapeAttribute(t("boardSortLabel"))}">
          <button class="board-sort__button${state.boardSort === "oldest" ? " is-active" : ""}" type="button" data-board-sort="oldest">${escapeHtml(t("boardSortOldest"))}</button>
          <button class="board-sort__button${state.boardSort === "newest" ? " is-active" : ""}" type="button" data-board-sort="newest">${escapeHtml(t("boardSortNewest"))}</button>
          <button class="board-sort__button${state.boardSort === "hot" ? " is-active" : ""}" type="button" data-board-sort="hot">${escapeHtml(t("boardSortHot"))}</button>
        </div>
      </div>
    `;
  }

  function renderBoardPosts(posts) {
    const sortedPosts = [...posts].sort(compareBoardPosts);
    if (!sortedPosts.length) {
      return `${renderBoardSortControls()}<div class="section-card"><p class="empty-state empty-state--center">${escapeHtml(t("noPostsYet"))}</p></div>`;
    }

    return `${renderBoardSortControls()}${sortedPosts.map((post) => {
      const comments = post.comments || [];
      const commentCount = Number(post.commentCount ?? comments.length);
      return `
      <article class="section-card board-post" data-post-id="${escapeHtml(String(post.id))}">
        <div class="board-post__head">
          <div class="board-post__author">
            ${renderUserIdentity(post.author || {})}
          </div>
          <div class="admin-user__email board-post__time">${escapeHtml(formatTime(post.createdAt))}</div>
        </div>
        ${renderBoardPostBody(post)}
        <div class="board-post__actions">
          <div class="board-post__action-main">
            <button class="board-comments__toggle" type="button" data-toggle-comments aria-expanded="false">
              ${escapeHtml(t("viewComments", { count: commentCount }))}
            </button>
            ${renderReactionBar("post", post.id || "", post.reactions || [])}
          </div>
          ${post.canDelete ? `<button class="user-action__button user-action__button--danger" type="button" data-delete-post>${escapeHtml(t("deletePost"))}</button>` : ""}
        </div>
        <div class="board-comments">
          <div class="board-comments__panel" data-comments-panel hidden>
            <div class="section-title section-title--small">${escapeHtml(t("comments"))}</div>
            <div class="board-comments__list">${comments.map((comment) => renderBoardComment(comment)).join("") || `<p class="empty-state empty-state--center">${escapeHtml(t("noPostsYet"))}</p>`}</div>
            <div class="board-comment__composer">
              <input class="form-control" type="text" data-comment-input placeholder="${escapeHtml(t("commentPlaceholder"))}">
              <button class="form-button form-button--secondary" type="button" data-comment-send>${escapeHtml(t("sendComment"))}</button>
            </div>
          </div>
        </div>
      </article>
    `;
    }).join("")}`;
  }

  function renderBoardList(host, posts) {
      host.innerHTML = renderBoardPosts(posts);
      $$('[data-board-sort]', host).forEach((button) => {
        button.addEventListener('click', () => {
          const nextSort = ["oldest", "newest", "hot"].includes(button.dataset.boardSort) ? button.dataset.boardSort : "newest";
          if (state.boardSort === nextSort) return;
          state.boardSort = nextSort;
          renderBoardList(host, posts);
        });
      });
      $$('[data-user-link]', host).forEach((node) => {
        node.addEventListener('click', (event) => {
          event.preventDefault();
          const uid = node.dataset.userLink;
          if (uid) navTo(userPanelHref(uid));
        });
      });
      $$('[data-toggle-comments]', host).forEach((button) => {
        button.addEventListener('click', () => {
          const card = button.closest('[data-post-id]');
          const panel = $('[data-comments-panel]', card);
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!expanded));
          if (panel) panel.hidden = expanded;
          if (!expanded) {
            button.textContent = t("hideComments");
          } else {
            const postId = Number(card?.dataset.postId);
            const post = posts.find((item) => Number(item?.id) === postId);
            const count = Number(post?.commentCount ?? post?.comments?.length ?? 0);
            button.textContent = t("viewComments", { count });
          }
        });
      });
      $$('[data-toggle-reaction-menu]', host).forEach((button) => {
        button.addEventListener('click', () => {
          const group = button.closest('[data-reaction-group]');
          const picker = $('[data-reaction-picker]', group);
          const expanded = button.getAttribute('aria-expanded') === 'true';
          $$('[data-reaction-picker]', host).forEach((otherPicker) => {
            if (otherPicker !== picker) otherPicker.hidden = true;
          });
          $$('[data-toggle-reaction-menu]', host).forEach((otherButton) => {
            if (otherButton !== button) otherButton.setAttribute('aria-expanded', 'false');
          });
          button.setAttribute('aria-expanded', String(!expanded));
          if (picker) picker.hidden = expanded;
        });
      });
      $$('[data-reaction-index]', host).forEach((button) => {
        button.addEventListener('click', async () => {
          if (!state.session) {
            toast(t("boardNeedLogin"), "error");
            openLoginModal();
            return;
          }
          const targetType = button.dataset.reactionTargetType === "comment" ? "comment" : "post";
          const targetId = Number(button.dataset.reactionTargetId);
          const reactionIndex = Number(button.dataset.reactionIndex);
          const reactionKey = button.dataset.reactionKey || BOARD_REACTION_KEYS[reactionIndex] || "";
          const emoji = BOARD_REACTION_EMOJIS[reactionIndex] || "";
          if (!targetId || !emoji) return;
          try {
            await api('/api/posts/reaction', { method: 'POST', body: { targetType, targetId, reactionIndex, reactionKey, emoji } });
            await loadBoard();
          } catch (error) {
            toast(error.message || t("genericError"), "error");
          }
        });
      });
      $$('[data-comment-send]', host).forEach((button) => {
        button.addEventListener('click', async () => {
          if (!state.session) {
            toast(t("boardNeedLogin"), "error");
            openLoginModal();
            return;
          }
          const card = button.closest('[data-post-id]');
          const postId = Number(card?.dataset.postId);
          const input = $('[data-comment-input]', card);
          const body = String(input?.value || '').trim();
          if (!body || body.length > 1000) {
            toast(t("commentBodyInvalid"), "error");
            return;
          }
          try {
            await api('/api/posts/comment', { method: 'POST', body: { postId, body } });
            await loadBoard();
          } catch (error) {
            toast(error.message || t("genericError"), "error");
          }
        });
      });
      $$('[data-toggle-post-body]', host).forEach((button) => {
        button.addEventListener('click', () => {
          const card = button.closest('[data-post-id]');
          const body = $('[data-post-body]', card);
          const preview = $('[data-post-preview]', body);
          const full = $('[data-post-full]', body);
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!expanded));
          button.textContent = expanded ? t("expandPost") : t("collapsePost");
          body?.classList.toggle('board-post__body--collapsed', expanded);
          body?.classList.toggle('board-post__body--expanded', !expanded);
          if (preview) preview.hidden = !expanded;
          if (full) full.hidden = expanded;
        });
      });
      $$('[data-delete-post]', host).forEach((button) => {
        button.addEventListener('click', async () => {
          const card = button.closest('[data-post-id]');
          const postId = Number(card?.dataset.postId);
          try {
            await api('/api/posts', { method: 'DELETE', body: { postId } });
            card?.remove();
            const index = posts.findIndex((post) => Number(post?.id) === postId);
            if (index >= 0) posts.splice(index, 1);
            if (!$("[data-post-id]", host)) {
              renderBoardList(host, posts);
            }
          } catch (error) {
            toast(error.message || t("genericError"), "error");
          }
        });
      });
      $$('[data-delete-comment]', host).forEach((button) => {
        button.addEventListener('click', async () => {
          const commentNode = button.closest('[data-comment-id]');
          const commentId = Number(commentNode?.dataset.commentId);
          if (!commentId) return;
          try {
            await api('/api/posts/comment', { method: 'DELETE', body: { commentId } });
            await loadBoard();
          } catch (error) {
            toast(error.message || t("genericError"), "error");
          }
        });
      });
  }

  async function loadBoard() {
    const host = $("[data-board-list]");
    if (!host) return;
    renderBoardEditor();
    host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(t("loading"))}</div>`;
    try {
      const result = await api(`/api/posts?lang=${encodeURIComponent(LANG)}`);
      const posts = result.posts || [];
      renderBoardList(host, posts);
    } catch (error) {
      host.innerHTML = `<div class="profile-panel__loading">${escapeHtml(error.message || t("genericError"))}</div>`;
    }
  }

  function ensureBoardBackToTop() {
    if (!isBoard() || $("[data-board-back-top]")) return;
    const button = document.createElement("button");
    button.className = "board-back-top";
    button.type = "button";
    button.setAttribute("data-board-back-top", "");
    button.setAttribute("aria-label", t("backToTop"));
    button.title = t("backToTop");
    button.textContent = "↑";

    const update = () => {
      button.classList.toggle("is-visible", window.scrollY > 500);
    };

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", update, { passive: true });
    document.body.appendChild(button);
    update();
  }

  function removePanelBackToTop() {
    $("[data-panel-back-top]")?.remove();
  }

  function ensurePanelBackToTop() {
    if (!isPanel() || $("[data-panel-back-top]")) return;
    const button = document.createElement("button");
    button.className = "board-back-top";
    button.type = "button";
    button.setAttribute("data-panel-back-top", "");
    button.setAttribute("aria-label", t("backToTop"));
    button.title = t("backToTop");
    button.textContent = "↑";

    const update = () => {
      if (!button.isConnected) return;
      button.classList.toggle("is-visible", window.scrollY > 500);
    };

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", update, { passive: true });
    document.body.appendChild(button);
    update();
  }

  function updateAboutUptime() {
    const targets = $$("[data-site-uptime-duration]");
    if (!targets.length) return;

    const launchDate = new Date(2026, 5, 16);
    const today = new Date();
    let cursor = new Date(launchDate);
    let years = today.getFullYear() - cursor.getFullYear();
    cursor.setFullYear(cursor.getFullYear() + years);
    if (cursor > today) {
      years -= 1;
      cursor = new Date(launchDate);
      cursor.setFullYear(cursor.getFullYear() + years);
    }

    let months = (today.getFullYear() - cursor.getFullYear()) * 12 + today.getMonth() - cursor.getMonth();
    cursor.setMonth(cursor.getMonth() + months);
    if (cursor > today) {
      months -= 1;
      cursor.setMonth(cursor.getMonth() - 1);
    }

    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const cursorDate = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
    const days = Math.max(0, Math.floor((todayDate - cursorDate) / 86400000));
    const parts = [];
    if (LANG === "zh-CN") {
      if (years > 0) parts.push(`${years} 年`);
      if (months > 0) parts.push(`${months} 月`);
      parts.push(`${days} 天`);
    } else {
      if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
      if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
      parts.push(`${days} ${days === 1 ? "day" : "days"}`);
    }
    const duration = parts.join(LANG === "zh-CN" ? " " : ", ");
    targets.forEach((target) => {
      target.textContent = duration;
    });
  }

  async function bootstrapPage() {
    initLanguageMenu();
    initThemeMenu();
    initTopbarActions();
    ensureMobileTopbarMenu();
    updateAboutUptime();
    await loadSession();

    if (isHome()) {
      await loadHome();
    }

    if (isPanel()) {
      await loadPanel();
      await renderPanelRepoCards();
    }

    if (isBoard()) {
      ensureBoardBackToTop();
      await loadBoard();
    }
  }

  function initPageLoadingUX() {
    ensureGlobalLoader();
    window.addEventListener("beforeunload", () => {
      showGlobalLoader();
    });

    window.addEventListener("pageshow", () => {
      hideGlobalLoader(true);
    });

    window.addEventListener("hashchange", () => {
      if (!isPanel()) return;
      runWithLoader(() => loadPanel()).catch((error) => {
        toast(error?.message || t("genericError"), "error");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    initPageLoadingUX();
    try {
      await runWithLoader(() => bootstrapPage());
    } finally {
      hideGlobalLoader(true);
    }
  });
})();
