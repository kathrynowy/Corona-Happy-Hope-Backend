import mongoose from '../context';
import { FavouritesListModel } from './model';

const Schema = mongoose.Schema;

const favouritesListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    goods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'good',
      },
    ],
  },
  { versionKey: false },
);

export default mongoose.model<FavouritesListModel>('favouritesList', favouritesListSchema);
