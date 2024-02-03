import { connect } from 'mongoose';

export async function connectDatabase() {
  try {
    const url = process.env.DB_URL;
    await connect(url);
    console.log('Database connected...');
  } catch (error) {
    console.log('ERROR connectDatabase: >=>', error);
  }
}
