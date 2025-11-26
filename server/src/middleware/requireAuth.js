import { validateSession } from '../utils/sessionStore.js';

export function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const session = validateSession(token);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.admin = session;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}


