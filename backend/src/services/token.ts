import { sign, verify } from 'jsonwebtoken';

const secret = process.env.SECRET || 'cxhcacchadhcaioeuoh';

type TCreateTokenPayload = string | object | Buffer;

export function createToken(payload: TCreateTokenPayload) {
  return sign(payload, secret);
}

export function verifyToken(token: string) {
  return verify(token, secret);
}
