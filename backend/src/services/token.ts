import { sign, verify } from 'jsonwebtoken';

const secret = process.env.SECRET || 'cxhcacchadhcaioeuoh';

export function createToken(payload: any) {
  return sign(payload, secret);
}

export function verifyToken(token: string) {
  return verify(token, secret);
}
