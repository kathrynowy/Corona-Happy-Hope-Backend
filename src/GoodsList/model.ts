import mongoose from '../context';
import { AccessRules } from './types';

export interface GoodsListModel extends mongoose.Document {
  userId: string;
  name: string;
  accessRule: AccessRules;
  description: string;
  image: number;
  goods: any[];
}
