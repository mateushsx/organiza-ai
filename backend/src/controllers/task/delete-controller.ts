import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';

export async function deleteTaskController(req: Request, res: Response) {
  const { taskId } = req.params;

  if (!taskId) return res.status(400).send('missing-param-taskId');

  try {
    await TaskModel.deleteOne({ id: taskId });

    return res.status(200).json({ id: taskId });
  } catch (error) {
    console.log('ERROR deleteTaskController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
