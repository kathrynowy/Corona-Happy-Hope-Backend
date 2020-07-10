import good from '../Good/schema';
import wishList from './schema';

const create = (data: any) => wishList.create(data);

const getById = async (wishListId: string | any) =>
  await wishList.findById(wishListId).populate({ path: 'goods', model: good });

const getAllByUserId = async (userId: string | any) =>
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

const deleteWishByUserId = async (userId: string, goodId: string | any, wishListId: string | any) =>
  await wishList.findByIdAndUpdate(wishListId, { $pull: { goods: goodId } });

const addBookedGood = async (wishListId: string, goodId: string | any) =>
  await wishList.findByIdAndUpdate(wishListId, { $push: { bookedGoods: goodId } });

const removeBookedGood = async (wishListId: string, goodId: string | any) =>
  await wishList.findByIdAndUpdate(wishListId, { $pull: { bookedGoods: goodId } });

const getBookedGood = async (wishListId: string, goodId: string | any) =>
  await wishList.findOne({ _id: wishListId, bookedGood: { $in: [goodId] } });

const editWishListById = async (wishListId: string, data: any) => await wishList.findByIdAndUpdate(wishListId, data);

export default {
  create,
  getAllByUserId,
  getById,
  addWish,
  deleteWishByUserId,
  addBookedGood,
  getBookedGood,
  removeBookedGood,
  editWishListById,
};
