import mongoose from '../context';
import { GoodModel } from '../Good/model';

export interface IdeasModel extends mongoose.Document {
  goods: GoodModel[];
  amountOfIdeas: number;
}
