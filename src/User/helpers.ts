import { UserModel } from './model';

import Good from '../Good/schema';
import User from './schema';

const create = (data: UserModel) => User.create(data);

const signIn = async (email: string | any, password: string | any) => await User.find({ email, password });

const getById = async (id: string | any) => await User.findById(id);

const getBookedByUser = async (id: string | any) =>
  await User.findById(id)
    .populate({
      path: 'bookedGoodsByUser.goodId',
      model: Good,
    })
    .populate({
      path: 'bookedGoodsByUser.bookUserId',
      model: User,
      select: { image: 1, firstName: 1, lastName: 1, city: 1, country: 1 },
    });

const addCurrentWishlist = async (userId: string | any, wishListId: string | any) =>
  await User.findByIdAndUpdate(userId, { currentWishlist: wishListId });

const checkUserExistence = (email: string) => User.find({ email });

const getFollowersById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'followers', model: User });

const getFollowingById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'following', model: User });

const bookGoodForUser = async (userId: string | any, data: any) =>
  await User.findByIdAndUpdate(userId, { $push: { bookedGoodsForUser: data } });

const bookGoodByUser = async (userId: string | any, data: any) =>
  await User.findByIdAndUpdate(userId, { $push: { bookedGoodsByUser: data } });

const unbookGoodForUser = async (userId: string | any, data: any) =>
  await User.findByIdAndUpdate(userId, { $pull: { bookedGoodsForUser: data } });

const unbookGoodByUser = async (userId: string | any, data: any) =>
  await User.findByIdAndUpdate(userId, { $pull: { bookedGoodsByUser: data } });

const unbookGood = async (userId: string | any, data: any) =>
  await User.findByIdAndUpdate(userId, { $pull: { bookedGoods: data } });

const addToFollowing = async (userId: string | any, followingId: string | any) => {
  await User.findByIdAndUpdate(userId, { $push: { following: followingId } });
  await User.findByIdAndUpdate(followingId, { $push: { followers: userId } });
};

const getByName = async (name: string | any, userId: string | any) => {
  name = name.toLowerCase().trim();

  const isFirstAndLast = name.split(' ').length === 2;

  const [first, last] = isFirstAndLast ? name.split(' ') : [];

  return !isFirstAndLast
    ? await User.find({
        _id: { $ne: userId },
        $or: [
          {
            firstName: {
              $regex: name,
              $options: 'ig',
            },
          },
          {
            lastName: {
              $regex: name,
              $options: 'ig',
            },
          },
        ],
        followers: { $ne: userId },
      })
    : await User.find({
        _id: { $ne: userId },
        firstName: first,
        lastName: {
          $regex: last,
          $options: 'ig',
        },
        followers: { $ne: userId },
      });
};

const deleteFromFollowing = async (userId: string | any, followingId: string | any) => {
  await User.findByIdAndUpdate(userId, { $pull: { following: followingId } });
  await User.findByIdAndUpdate(followingId, { $pull: { followers: userId } });
};

const getBookedGood = async (userId: string | any, bookUserId: string, goodId: string | any) => {
  const user = await User.findById(bookUserId);

  const isGoodBooked = user.bookedGoodsForUser.find((good: any) => good.goodId == goodId);

  const isGoodBookedByCurrentUser = user.bookedGoodsForUser.find((good: any) => good.bookUserId == userId);

  return [isGoodBooked, isGoodBookedByCurrentUser];
};

export default {
  create,
  signIn,
  getById,
  getFollowersById,
  getFollowingById,
  addToFollowing,
  deleteFromFollowing,
  checkUserExistence,
  getByName,
  addCurrentWishlist,
  bookGoodByUser,
  bookGoodForUser,
  unbookGoodForUser,
  unbookGoodByUser,
  unbookGood,
  getBookedGood,
  getBookedByUser,
};
