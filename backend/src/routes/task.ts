import { Router } from 'express';
import {
  createTaskController,
  deleteTaskController,
  listTasksController,
  updateTaskController,
} from '~/controllers/task';
import { autheticationMiddleware } from '~/middlewares';

const taskRoutes = Router();

taskRoutes.post('/task/create', autheticationMiddleware, createTaskController);
taskRoutes.post('/task/list', autheticationMiddleware, listTasksController);
taskRoutes.put('/task/update', autheticationMiddleware, updateTaskController);
taskRoutes.delete('/task/delete/:taskId', autheticationMiddleware, deleteTaskController);

export { taskRoutes };
