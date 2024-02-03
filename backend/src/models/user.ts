import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

const UserModel = model('User', UserSchema);

export { UserModel, UserSchema };
