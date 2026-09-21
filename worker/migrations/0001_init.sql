CREATE TABLE IF NOT EXISTS subscribers (
  email TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  source TEXT NOT NULL DEFAULT 'website'
);

CREATE TABLE IF NOT EXISTS signups (
  id TEXT PRIMARY KEY,
  email TEXT,
  plan_id TEXT,
  stripe_session_id TEXT UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
