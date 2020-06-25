import mongoose from '../context';
import { FriendsListModel } from './model';
import { AccessRules } from './types';

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
    accessRule: {
      type: AccessRules,
      default: AccessRules.All,
    },
    accessUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    description: {
      type: Schema.Types.String,
      required: [true, 'description is required'],
    },
    image: String,
  },
  { versionKey: false },
);

export default mongoose.model<FriendsListModel>('friendsList', friendsListSchema);
