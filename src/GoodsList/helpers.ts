import { GoodsListModel } from './model';
import goodsListSchema from './schema';

const create = (data: GoodsListModel) => goodsListSchema.create(data);

const getAllByUserId = async (userId: string | any) => await goodsListSchema.find({ userId });

const addGood = async (listId: string | any, goodId) =>
  await goodsListSchema.findByIdAndUpdate(listId, { $push: { goods: goodId } });

export default {
  create,
  getAllByUserId,
  addGood,
};
