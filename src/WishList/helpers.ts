import good from '../Good/schema';
import wishList from './schema';

const create = (data: any) => wishList.create(data);

const getByUserId = async (userId: string | any) =>
  await wishList.find({ userId }).populate({ path: 'goods', model: good });

const addWish = async (userId: string | any, goodId: any, wishListId: any) => {
  let result;

  if (wishListId) {
    const list = (await wishList.findById(wishListId)) as any;

    if (list) {
      result = await wishList.findByIdAndUpdate(wishListId, { $push: { goods: goodId } });
    }
  } else {
    result = (await wishList.findOneAndUpdate({ userId, name: 'вишлист' }, { $push: { goods: goodId } })) as any;
  }

  return result;
};

const deleteWishByUserId = async (userId: string, goodId: string | any) =>
  await wishList.findOneAndUpdate({ userId }, { $pull: { goods: goodId } });

export default {
  create,
  getByUserId,
  addWish,
  deleteWishByUserId,
};
