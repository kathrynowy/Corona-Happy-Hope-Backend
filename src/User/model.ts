import { Request } from 'express';

import mongoose from '../context';

export interface UserModel extends mongoose.Document {
  validPassword(password: string): any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  followers: string[];
  following: string[];
  city: string;
  country: string;
  image: string;
  goods: string[];
  lists: string[]; // ???
  bookedGoods: string[];
  likedGoods: string[];
}

export interface GetUserAuthInfoRequest extends Request {
  user: any;
}
