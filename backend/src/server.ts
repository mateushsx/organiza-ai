import express from 'express';
import { userRoutes } from './routes/user';
import { taskRoutes } from './routes/task';
import { env } from './settings/environment';
import { connectDatabase } from './settings/mongodb';

connectDatabase();

const server = express();
const port = env.port;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(userRoutes);
server.use(taskRoutes);

server.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
