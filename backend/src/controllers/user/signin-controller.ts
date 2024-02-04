import { Request, Response } from 'express';
import { UserModel } from '~/models/user';
import { createToken } from '~/services/token';
import { compareHash } from '~/services/cryptography';

export async function signinController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email) return res.send('missing-param-email').status(400);
  if (!password) return res.send('missing-param-password').status(400);

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.send('not-found-user').status(404);

    const isValidPassword = compareHash(password, user.password);

    if (!isValidPassword) return res.send('email-password-incorrect').status(401);

    const token = createToken({ id: user.id, email });

    return res.json({ token, id: user.id }).status(200);
  } catch (error) {
    console.log('ERROR signinController: >=>', error);
    return res.send('internal-server-error').status(500);
  }
}
