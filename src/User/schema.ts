import * as bcrypt from 'bcryptjs';

import mongoose from '../context';
import { UserModel } from './model';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: Schema.Types.String,
      required: [true, 'Email is required'],
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
    city: String,
    country: String,
    image: {
      type: Schema.Types.String,
      default: 'https://i.pinimg.com/originals/2c/7b/59/2c7b59d643e7649ea88681b69a29a7c9.jpg',
    },
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
    currentWishlist: String,
    isVisibleInSearch: {
      type: Schema.Types.Boolean,
      default: true,
    },
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
        wishListId: String,
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

userSchema.methods.validPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model<UserModel>('user', userSchema);
