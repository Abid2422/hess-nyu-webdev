import bcrypt from 'bcryptjs';
import { AdminUser } from '../models/AdminUser.js';

export async function ensureAdminUser() {
  const { ADMIN_USERNAME, ADMIN_PASSWORD_HASH, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_USERNAME) {
    throw new Error('ADMIN_USERNAME is not set');
  }

  if (!ADMIN_PASSWORD_HASH && !ADMIN_PASSWORD) {
    throw new Error('Set either ADMIN_PASSWORD_HASH or ADMIN_PASSWORD in the environment');
  }

  let passwordHash = ADMIN_PASSWORD_HASH;
  if (!passwordHash && ADMIN_PASSWORD) {
    const saltRounds = Number(process.env.ADMIN_PASSWORD_SALT_ROUNDS || 12);
    passwordHash = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);
  }

  await AdminUser.findOneAndUpdate(
    { username: ADMIN_USERNAME },
    { username: ADMIN_USERNAME, passwordHash },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );
}


