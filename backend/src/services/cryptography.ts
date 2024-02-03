import { compareSync, hashSync } from 'bcrypt';

const salt = process.env.SALT;

export function createHash(value: string) {
  if (!salt) return new Error('This function require salt');

  return hashSync(value, salt);
}

export function compareHash(value: string, valueHash: string) {
  return compareSync(value, valueHash);
}
