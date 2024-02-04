import express from 'express';
import { userRoutes } from './routes/user';
import { connectDatabase } from './settings/mongodb';
import { env } from './settings/environment';

connectDatabase();

const server = express();
const port = env.port;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(userRoutes);

server.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
