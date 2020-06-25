import { FriendsListModel } from './model';
import friendsListSchema from './schema';

const create = (data: FriendsListModel) => friendsListSchema.create(data);

const getAllByUserId = async (userId: string | any) => await friendsListSchema.find({ userId });

const addFriend = async (listId: string | any, userId) =>
  await friendsListSchema.findByIdAndUpdate(listId, { $push: { accessUsers: userId } });

export default {
  create,
  getAllByUserId,
  addFriend,
};
