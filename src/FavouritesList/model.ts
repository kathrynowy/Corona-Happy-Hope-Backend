import mongoose from '../context';

export interface FavouritesListModel extends mongoose.Document {
  userId: string;
  goods: any[];
}
