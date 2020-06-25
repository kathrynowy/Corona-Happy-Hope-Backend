import mongoose from '../context';

export interface GoodModel extends mongoose.Document {
  name: string;
  price: number;
  userId: string;
  discount: number;
  description: string;
  image: string;
}
