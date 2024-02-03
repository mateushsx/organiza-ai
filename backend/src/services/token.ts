import { sign, verify } from 'jsonwebtoken';
import { env } from '~/settings/environment';

const secret = env.secret;

type TCreateTokenPayload = string | object | Buffer;

export function createToken(payload: TCreateTokenPayload) {
  return sign(payload, secret);
}

export function verifyToken(token: string) {
  return verify(token, secret);
}
