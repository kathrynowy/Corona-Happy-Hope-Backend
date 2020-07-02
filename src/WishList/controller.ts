import { Controller } from '../types/controller';
import wishListHelper from './helpers';

export const createWishList: Controller = async (req, res, next) => {
  try {
    const list = await wishListHelper.create(req.body);

    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const deleteWish: Controller = async (req, res, next) => {
  try {
    const { userId, goodId } = req.body;

    const deleted = await wishListHelper.deleteWishByUserId(userId, goodId);

    res.json(deleted);
  } catch (error) {
    next(error);
  }
};

export const getWishListByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const wishList = await wishListHelper.getByUserId(userId);

    res.json(wishList[0]);
  } catch (error) {
    next(error);
  }
};

export const getAllWishListsByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const wishList = await wishListHelper.getByUserId(userId);

    res.json(wishList);
  } catch (error) {
    next(error);
  }
};

export const addWishGood: Controller = async (req, res, next) => {
  try {
    const { userId, goodId, wishListId } = req.body;

    const control = await wishListHelper.addWish(userId, goodId, wishListId);

    res.json(control);
  } catch (error) {
    next(error);
  }
};
