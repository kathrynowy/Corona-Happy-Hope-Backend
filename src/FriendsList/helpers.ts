import user from '../User/schema';
import { FriendsListModel } from './model';
import friendsListSchema from './schema';

const create = (data: FriendsListModel) => friendsListSchema.create(data);

const getAllByUserId = async (userId: string | any) => await friendsListSchema.find({ userId });

const getById = async (listId: string | any) =>
  await friendsListSchema.findById(listId).populate({ path: 'friends', model: user });

const addFriend = async (listId: string | any, userId: string | any) =>
  await friendsListSchema.findByIdAndUpdate(listId, { $push: { accessUsers: userId } });

const editFriendListById = async (friendListId: string, data: any) =>
  await friendsListSchema.findByIdAndUpdate(friendListId, data);

export default {
  create,
  getAllByUserId,
  addFriend,
  getById,
  editFriendListById,
};
