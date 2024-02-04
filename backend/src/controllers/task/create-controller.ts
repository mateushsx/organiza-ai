import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';
import { UserModel } from '~/models/user';

export async function createTaskController(req: Request, res: Response) {
  const { title, userId } = req.body;

  if (!title) return res.send('missing-param-title').status(400);
  if (!userId) return res.send('missing-param-userId').status(400);

  try {
    const user = await UserModel.findOne({ id: userId });

    if (!user) return res.send('user-not-found').status(404);

    const task = {
      id: randomUUID(),
      title,
      createdAt: new Date(),
      createdBy: userId,
      status: 'pending',
    };

    const taskCreated = await TaskModel.create(task);

    return res
      .json({
        id: taskCreated.id,
        title: taskCreated.title,
      })
      .status(201);
  } catch (error) {
    console.log('ERROR createTaskController: >=>', error);
    return res.send('internal-server-error').status(500);
  }
}
