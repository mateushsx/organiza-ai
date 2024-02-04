import crypto from 'crypto';
import { Request, Response } from 'express';
import { UserModel } from '~/models/user';
import { createHash } from '~/services/cryptography';
import { createToken } from '~/services/token';

export async function signupController(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!name) return res.send('missing-param-name').status(400);
  if (!email) return res.send('missing-param-email').status(400);
  if (!password) return res.send('missing-param-password').status(400);

  try {
    const userExists = await UserModel.findOne({
      email: email,
    });

    if (userExists) return res.status(400).send('user-already-exists');

    const passwordHash = createHash(password);

    if (passwordHash instanceof Error) return res.status(401).send(passwordHash.message);

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      password: passwordHash,
    };

    await UserModel.create(user);

    const token = createToken({ id: user.id, email, name });

    return res.status(201).json({ token, id: user.id });
  } catch (error) {
    console.log('ERROR signupController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
