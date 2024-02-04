import { Router } from 'express';
import { signupController, signinController } from '~/controllers/user';

const userRoutes = Router();

userRoutes.post('/user/signin', signinController);
userRoutes.post('/user/signup', signupController);

export { userRoutes };
