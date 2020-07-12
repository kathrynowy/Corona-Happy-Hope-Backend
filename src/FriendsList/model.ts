import mongoose from '../context';
import { AccessRules } from './types';

export interface FriendsListModel extends mongoose.Document {
  userId: string;
  name: string;
  accessRule: AccessRules;
  description: string;
  image: string;
  friends: string[];
}
