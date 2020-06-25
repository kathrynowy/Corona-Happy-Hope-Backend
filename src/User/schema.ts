import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../context';
import { UserModel } from './model';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    login: {
      type: Schema.Types.String,
      required: [true, 'Login is required'],
    },
    password: {
      type: Schema.Types.String,
      required: [true, 'password is required'],
    },
    firstName: {
      type: Schema.Types.String,
      required: [true, 'firstName is required'],
    },
    lastName: {
      type: Schema.Types.String,
      required: [true, 'lastName is required'],
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    amountOfLikes: {
      type: Number,
      default: 0,
    },
    amountOfViews: {
      type: Number,
      default: 0,
    },
    city: String,
    country: String,
    image: String,
    goods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'good',
      },
    ],
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: 'list',
      },
    ],
    bookedGoods: [
      {
        goodId: {
          type: Schema.Types.ObjectId,
          ref: 'good',
        },
        bookUserId: {
          type: Schema.Types.ObjectId,
          ref: 'good',
        },
      },
    ],
    likedGoods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'good',
      },
    ],
  },
  { versionKey: false },
);

userSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<UserModel>('user', userSchema);