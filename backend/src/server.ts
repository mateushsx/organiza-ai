import express from 'express';
import { config } from 'dotenv';
import { userRoutes } from './routes/user';
import { connectDatabase } from './settings/mongodb';

config();
connectDatabase();

const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded());

server.use(userRoutes);

server.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
