import mongoose from '../context';
import { FriendsListModel } from './model';

const Schema = mongoose.Schema;

const friendsListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    name: {
      type: Schema.Types.String,
      required: [true, 'name is required'],
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    description: {
      type: Schema.Types.String,
      required: [true, 'description is required'],
    },
    image: {
      type: String,
      default: '',
    },
  },
  { versionKey: false },
);

friendsListSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<FriendsListModel>('friendsList', friendsListSchema);
