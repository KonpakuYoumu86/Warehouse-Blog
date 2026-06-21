PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS app_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uid TEXT NOT NULL UNIQUE DEFAULT '',
  role TEXT NOT NULL DEFAULT 'user',
  username TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  avatar_path TEXT NOT NULL DEFAULT '',
  avatar_data_url TEXT NOT NULL DEFAULT '',
  bio_intro_en TEXT NOT NULL DEFAULT '',
  bio_intro_zh TEXT NOT NULL DEFAULT '',
  account_desc_en TEXT NOT NULL DEFAULT '',
  account_desc_zh TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

CREATE TABLE IF NOT EXISTS app_contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  value TEXT NOT NULL,
  extra_label TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_app_contacts_user_position ON app_contacts(user_id, position);

CREATE TABLE IF NOT EXISTS app_repos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  display_name TEXT NOT NULL,
  repo_owner TEXT NOT NULL,
  repo_name TEXT NOT NULL,
  repo_full_name TEXT NOT NULL,
  repo_url TEXT NOT NULL,
  description_en TEXT NOT NULL DEFAULT '',
  description_zh TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_app_repos_user_position ON app_repos(user_id, position);

CREATE TABLE IF NOT EXISTS app_sessions (
  session_id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_app_sessions_user_id ON app_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_app_sessions_expires_at ON app_sessions(expires_at);

CREATE TABLE IF NOT EXISTS pending_email_verifications (
  email TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_pending_email_verifications_expires_at ON pending_email_verifications(expires_at);

CREATE TABLE IF NOT EXISTS github_repo_cache (
  repo_full_name TEXT PRIMARY KEY,
  stars INTEGER NOT NULL DEFAULT 0,
  exists_flag INTEGER NOT NULL DEFAULT 1,
  fetched_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);


CREATE UNIQUE INDEX IF NOT EXISTS idx_app_users_uid ON app_users(uid);

CREATE TABLE IF NOT EXISTS board_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_board_posts_created_at ON board_posts(created_at DESC);

CREATE TABLE IF NOT EXISTS board_post_likes (
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY(post_id, user_id),
  FOREIGN KEY(post_id) REFERENCES board_posts(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_board_post_likes_post_id ON board_post_likes(post_id);

CREATE TABLE IF NOT EXISTS board_post_reactions (
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  emoji TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY(post_id, user_id, emoji),
  FOREIGN KEY(post_id) REFERENCES board_posts(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_board_post_reactions_post_id ON board_post_reactions(post_id);

CREATE TABLE IF NOT EXISTS board_post_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  FOREIGN KEY(post_id) REFERENCES board_posts(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_board_post_comments_post_id ON board_post_comments(post_id, created_at ASC);

CREATE TABLE IF NOT EXISTS board_comment_reactions (
  comment_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  emoji TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY(comment_id, user_id, emoji),
  FOREIGN KEY(comment_id) REFERENCES board_post_comments(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES app_users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_board_comment_reactions_comment_id ON board_comment_reactions(comment_id);
