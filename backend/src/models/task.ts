import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  id: String,
  title: String,
  createdAt: Date,
  createdBy: String,
  status: String,
});

const TaskModel = model('Task', TaskSchema);

export { TaskModel, TaskSchema };
