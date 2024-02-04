import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '~/services/token';

export async function autheticationMiddleware(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    const isValidToken = verifyToken(bearerToken);

    if (isValidToken) {
      next();
    }
  } else {
    res.status(403).send('token-expired');
  }
}
