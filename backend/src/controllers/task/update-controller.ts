import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';

const taskKeys = ['title', 'status'];
const typeStatus = ['completed', 'pending'];

export async function updateTaskController(req: Request, res: Response) {
  const { taskId, updates } = req.body;

  if (!taskId) return res.status(400).send('missing-param-taskId');
  if (!updates) return res.status(400).send('missing-param-updates');

  try {
    const task = await TaskModel.findOne({ id: taskId });

    if (!task) return res.status(404).send('task-not-found');

    const isValidUpdates = Object.keys(updates || {}).some((keyUpdate) => {
      return taskKeys.includes(keyUpdate);
    });

    if (!isValidUpdates) return res.status(400).send('invalid-updates');

    for (const keyUpdate in updates) {
      if (Object.prototype.hasOwnProperty.call(updates, keyUpdate)) {
        const element = updates[keyUpdate];

        if (keyUpdate === 'status' && !typeStatus.includes(element)) {
          return res.status(400).send('invalid-update-status');
        }

        if (!element) return res.status(400).send(`param-${keyUpdate}-empty`);
      }
    }

    await TaskModel.updateOne({ id: taskId }, updates);

    return res.status(200).json({ id: taskId });
  } catch (error) {
    console.log('ERROR listTasksController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
