import mongoose from '../context';

export interface WishListModel extends mongoose.Document {
  userId: string;
  name: string;
  goods: any[];
  image: string;
}
