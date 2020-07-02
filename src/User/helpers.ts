import { UserModel } from './model';
import User from './schema';

const create = (data: UserModel) => User.create(data);

const signIn = async (email: string | any, password: string | any) => await User.find({ email, password });

const getById = async (id: string | any) => await User.findById(id);

const checkUserExistence = (email: string) => User.find({ email });

const getFollowersById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'followers', model: User });

const getFollowingById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'following', model: User });

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
};
