import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    role: {
      type: String,
      require: true,
      unique: true,
      enum: ['super admin', 'admin', 'user'],
    },
  },
  { timestamps: true }
);

const Users = models.users || model('users', UserSchema);

export default Users;
