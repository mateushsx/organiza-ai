import { Router } from 'express';
import { createTaskController } from '~/controllers/task';

const taskRoutes = Router();

taskRoutes.post('/task/create', createTaskController);

export { taskRoutes };
