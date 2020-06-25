import { UserModel } from './model';
import User from './schema';

const create = (data: UserModel) => User.create(data);

const signIn = async (login: string | any, password: string | any) => await User.find({ login, password });

const getById = async (id: string | any) => await User.findById(id);

const getFollowersById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'followers', model: User });

const getFollowingById = async (id: string | any) =>
  await User.findById(id).populate({ path: 'following', model: User });

const addToFollowing = async (userId: string | any, followingId: string | any) => {
  const user = await User.findByIdAndUpdate(userId, { $push: { following: followingId } });
  const following = await User.findByIdAndUpdate(followingId, { $push: { followers: userId } });

  console.log('fffff', user, following);
};

export default {
  create,
  signIn,
  getById,
  getFollowersById,
  getFollowingById,
  addToFollowing,
};
