import { config } from 'dotenv';
config();

export const env = {
  port: process.env.PORT || 3030,
  db_url: process.env.DB_URL,
  salt: process.env.SALT,
  secret: process.env.SECRET,
};
