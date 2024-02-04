import { Request, Response } from 'express';
import { TaskModel } from '~/models/task';
import { UserModel } from '~/models/user';

export async function listTasksController(req: Request, res: Response) {
  const { userId } = req.body;

  try {
    const user = await UserModel.findOne({ id: userId });

    if (!user) return res.send('user-not-found').status(404);

    const tasksDb = await TaskModel.find({
      createdBy: userId,
    });

    return res.json(tasksDb || []).status(200);
  } catch (error) {
    console.log('ERROR listTasksController: >=>', error);
    return res.send('internal-server-error').status(500);
  }
}
