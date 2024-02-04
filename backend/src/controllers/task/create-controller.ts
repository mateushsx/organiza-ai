import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';
import { UserModel } from '~/models/user';

export async function createTaskController(req: Request, res: Response) {
  const { title, userId } = req.body;

  if (!title) return res.status(400).send('missing-param-title');
  if (!userId) return res.status(400).send('missing-param-userId');

  try {
    const user = await UserModel.findOne({ id: userId });

    if (!user) return res.status(404).send('user-not-found');

    const task = {
      id: randomUUID(),
      title,
      createdAt: new Date(),
      createdBy: userId,
      status: 'pending',
    };

    const taskCreated = await TaskModel.create(task);

    return res.status(201).json({
      id: taskCreated.id,
      title: taskCreated.title,
    });
  } catch (error) {
    console.log('ERROR createTaskController: >=>', error);
    return res.status(500).send('internal-server-error');
  }
}
