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

export const editFriendList: Controller = async (req, res, next) => {
  try {
    const { friendListId, data } = req.body;

    const deleted = await friendsListHelper.editFriendListById(friendListId, data);

    res.json(deleted);
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

export const getListById: Controller = async (req, res, next) => {
  try {
    const { listId } = req.body;

    res.json(await friendsListHelper.getById(listId));
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
