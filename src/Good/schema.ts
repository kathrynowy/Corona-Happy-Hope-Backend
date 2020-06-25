import * as autoIncrement from 'mongoose-auto-increment';

import mongoose from '../context';
import { GoodModel } from './model';

const Schema = mongoose.Schema;

const goodSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, 'firstName is required'],
    },
    price: {
      type: Schema.Types.Number,
      required: [true, 'price is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    discount: Number,
    description: {
      type: Schema.Types.String,
      required: [true, 'description is required'],
    },
    image: {
      type: Schema.Types.String,
      required: [true, 'image is required'],
    },
  },
  { versionKey: false },
);

goodSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<GoodModel>('good', goodSchema);
