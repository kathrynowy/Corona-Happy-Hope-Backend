import { Controller } from '../types/controller';
import goodsListHelper from './helpers';

export const createGoodsList: Controller = async (req, res, next) => {
  try {
    const list = await goodsListHelper.create(req.body);

    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getAllGoodListsByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.query;

    res.json(await goodsListHelper.getAllByUserId(userId));
  } catch (error) {
    next(error);
  }
};

export const addGood: Controller = async (req, res, next) => {
  try {
    const { listId, goodId } = req.query;

    res.json(await goodsListHelper.addGood(listId, goodId));
  } catch (error) {
    next(error);
  }
};
