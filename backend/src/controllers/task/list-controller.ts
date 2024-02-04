import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';
import { UserModel } from '~/models/user';

export async function listTasksController(req: Request, res: Response) {
  const { userId } = req.body;

  if (!userId) return res.status(400).send('missing-param-userId');

  try {
    const user = await UserModel.findOne({ id: userId });

    if (!user) return res.status(404).send('user-not-found');

    const tasksDb = await TaskModel.find({
      createdBy: userId,
    });

    const tasks = tasksDb.map((task) => ({
      id: task.id,
      title: task.title,
      createdAt: task.createdAt,
      createdBy: task.createdBy,
      status: task.status,
    }));

    return res.status(200).json(tasks || []);
  } catch (error) {
    console.log('ERROR listTasksController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
