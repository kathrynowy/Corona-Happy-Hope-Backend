import mongoose from '../context';
import { IdeasModel } from './model';

const Schema = mongoose.Schema;

const ideasSchema = new Schema(
  {
    amountOfIdeas: {
      type: Schema.Types.Number,
      default: 0,
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

ideasSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model<IdeasModel>('ideas', ideasSchema);
