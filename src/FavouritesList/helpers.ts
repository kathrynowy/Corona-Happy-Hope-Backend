import good from '../Good/schema';
import { FavouritesListModel } from './model';
import favouritesListSchema from './schema';

const create = (data: any) => favouritesListSchema.create(data);

const getByUserId = async (userId: string | any) =>
  await favouritesListSchema.find({ userId }).populate({ path: 'goods', model: good });

const addFavourite = async (userId: string | any, goodId) => {
  const list = (await favouritesListSchema.findOne({ userId })) as any;

  let result;

  if (list) {
    const isAlreadyInFavourites = list.goods.includes(goodId);

    result = isAlreadyInFavourites
      ? await favouritesListSchema
          .findByIdAndUpdate(list.id, { $pull: { goods: goodId } })
          .populate({ path: 'goods', model: good })
      : await favouritesListSchema.findByIdAndUpdate(list.id, { $push: { goods: goodId } });
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
