import { compareSync, hashSync } from 'bcrypt';
import { env } from '~/settings/environment';

const salt = env.salt;

export function createHash(value: string) {
  if (!salt) return new Error('This function require salt');

  return hashSync(value, Number(salt));
}

export function compareHash(value: string, valueHash: string) {
  return compareSync(value, valueHash);
}
