import mongoose from '../context';
import { WishListModel } from './model';

const Schema = mongoose.Schema;

const wishListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    name: {
      type: String,
      default: 'вишлист',
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

wishListSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<WishListModel>('wishList', wishListSchema);
