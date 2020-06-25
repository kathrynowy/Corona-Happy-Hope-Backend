import { Controller } from '../types/controller';
import friendsListHelper from './helpers';

export const createFriendList: Controller = async (req, res, next) => {
  try {
    const list = await friendsListHelper.create(req.body);

    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getAllFriendListsByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.query;

    res.json(await friendsListHelper.getAllByUserId(userId));
  } catch (error) {
    next(error);
  }
};

export const addFriend: Controller = async (req, res, next) => {
  try {
    const { listId, userId } = req.query;

    res.json(await friendsListHelper.addFriend(listId, userId));
  } catch (error) {
    next(error);
  }
};
