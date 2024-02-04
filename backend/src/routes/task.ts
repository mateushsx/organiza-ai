import { Router } from 'express';
import {
  createTaskController,
  deleteTaskController,
  listTasksController,
  updateTaskController,
} from '~/controllers/task';

const taskRoutes = Router();

taskRoutes.post('/task/create', createTaskController);
taskRoutes.post('/task/list', listTasksController);
taskRoutes.put('/task/update', updateTaskController);
taskRoutes.delete('/task/delete/:taskId', deleteTaskController);

export { taskRoutes };
