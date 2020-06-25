import mongoose from '../context';
import { GoodsListModel } from './model';
import { AccessRules } from './types';

const Schema = mongoose.Schema;

const goodsListSchema = new Schema(
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
    description: {
      type: Schema.Types.String,
      required: [true, 'description is required'],
    },
    image: String,
    goods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'good',
      },
    ],
  },
  { versionKey: false },
);

export default mongoose.model<GoodsListModel>('goodsList', goodsListSchema);
