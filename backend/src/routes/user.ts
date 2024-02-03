import { Router } from 'express';
import { signupController } from '~/controllers/user';

const userRoutes = Router();

userRoutes.post('/user/signup', signupController);

export { userRoutes };
