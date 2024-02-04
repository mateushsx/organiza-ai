import { Request, Response } from 'express';
import { UserModel } from '~/models/user';
import { createToken } from '~/services/token';
import { compareHash } from '~/services/cryptography';

export async function signinController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email) return res.status(400).send('missing-param-email');
  if (!password) return res.status(400).send('missing-param-password');

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).send('not-found-user');

    const isValidPassword = compareHash(password, user.password);

    if (!isValidPassword) return res.status(401).send('email-password-incorrect');

    const token = createToken({ id: user.id, email });

    return res.status(200).json({ token, id: user.id });
  } catch (error) {
    console.log('ERROR signinController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
