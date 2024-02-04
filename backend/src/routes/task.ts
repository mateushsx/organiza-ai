import { Router } from 'express';
import { createTaskController, listTasksController } from '~/controllers/task';

const taskRoutes = Router();

taskRoutes.post('/task/create', createTaskController);
taskRoutes.post('/task/list', listTasksController);

export { taskRoutes };
