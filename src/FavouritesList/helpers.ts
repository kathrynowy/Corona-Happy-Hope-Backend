import good from '../Good/schema';
import { FavouritesListModel } from './model';
import favouritesListSchema from './schema';

const create = (data: FavouritesListModel) => favouritesListSchema.create(data);

const getByUserId = async (userId: string | any) =>
  await favouritesListSchema.find({ userId }).populate({ path: 'goods', model: good });

const addFavourite = async (userId: string | any, goodId) => {
  const list = (await favouritesListSchema.find({ userId })) as any;

  let result;

  if (list && list.length) {
    result = await favouritesListSchema.findByIdAndUpdate(list[0].id, { $push: { goods: goodId } });
  } else {
    result = await favouritesListSchema.create({ userId, goods: [goodId] });
  }

  return result;
};

export default {
  create,
  getByUserId,
  addFavourite,
};
