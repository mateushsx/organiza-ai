import { connect } from 'mongoose';
import { env } from './environment';

export async function connectDatabase() {
  try {
    const url = env.db_url;
    await connect(url);
    console.log('Database connected...');
  } catch (error) {
    console.log('ERROR connectDatabase: >=>', error);
  }
}
