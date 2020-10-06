import { Controller } from '../types/controller';
import wishListHelper from '../WishList/helpers';
import goodHelper from './helpers';

export const addGood: Controller = async (req, res, next) => {
  try {
    const good = await goodHelper.create(req.body);

    const wishListIds = req.body.wishListIds;

    wishListIds.forEach(async (wishListId: any) => {
      await wishListHelper.addWish(req.body.userId, good.id, wishListId);
    });

    res.json(good);
  } catch (error) {
    next(error);
  }
};

export const getGoodById: Controller = async (req, res, next) => {
  try {
    const { goodId } = req.query;

    res.json(await goodHelper.getById(goodId));
  } catch (error) {
    next(error);
  }
};

export const getBookedGoods: Controller = async (req, res, next) => {
  try {
    const { goodId } = req.query;

    res.json(await goodHelper.getById(goodId));
  } catch (error) {
    next(error);
  }
};
