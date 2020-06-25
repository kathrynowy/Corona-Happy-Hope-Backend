import mongoose from '../context';

export interface UserModel extends mongoose.Document {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  followers: string[];
  following: string[];
  amountOfLikes: number;
  amountOfViews: number;
  city: string;
  country: string;
  image: string;
  goods: string[];
  lists: string[];
  bookedGoods: string[];
  likedGoods: string[];
}
