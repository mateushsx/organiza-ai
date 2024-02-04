import { Router } from 'express';
import {
  createTaskController,
  listTasksController,
  updateTaskController,
} from '~/controllers/task';

const taskRoutes = Router();

taskRoutes.post('/task/create', createTaskController);
taskRoutes.post('/task/list', listTasksController);
taskRoutes.put('/task/update', updateTaskController);

export { taskRoutes };
