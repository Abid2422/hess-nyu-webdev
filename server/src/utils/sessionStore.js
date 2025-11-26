import crypto from 'crypto';

const DEFAULT_TTL_MS = 60 * 60 * 1000; // 1 hour
const sessions = new Map();

export function createSession(username, ttlMs = DEFAULT_TTL_MS) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + ttlMs;
  sessions.set(token, { username, expiresAt });
  return token;
}

export function validateSession(token) {
  const entry = sessions.get(token);
  if (!entry) {
    return null;
  }
  if (entry.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }
  return { username: entry.username, token };
}

export function invalidateSession(token) {
  sessions.delete(token);
}

export function purgeExpiredSessions() {
  const now = Date.now();
  for (const [token, entry] of sessions.entries()) {
    if (entry.expiresAt < now) {
      sessions.delete(token);
    }
  }
}


