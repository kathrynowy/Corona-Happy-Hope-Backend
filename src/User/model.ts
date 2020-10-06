import { Request } from 'express';

import mongoose from '../context';

// interface BookItem {
//   goodId: string;
//   bookUserId: string;
// }
export interface UserModel extends mongoose.Document {
  validPassword(password: string): any;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  followers: string[];
  following: string[];
  city?: string;
  country?: string;
  image: string;
  currentWishlist: string;
  currentFriendlist: string;
  isVisibleInSearch: boolean;
  goods: string[];
  lists: string[]; // ???
  bookedGoodsByUser: [{ bookUserId: string; goodId: string }];
  bookedGoodsForUser: any[];
  likedGoods: string[];
  isAuthFinished: boolean;
  googleId?: string;
}

export interface GetUserAuthInfoRequest extends Request {
  user: any;
}
