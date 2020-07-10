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
    const { userId, goodId, wishListId } = req.body;

    const deleted = await wishListHelper.deleteWishByUserId(userId, goodId, wishListId);

    res.json(deleted);
  } catch (error) {
    next(error);
  }
};

export const editWishList: Controller = async (req, res, next) => {
  try {
    const { wishListId, data } = req.body;

    const deleted = await wishListHelper.editWishListById(wishListId, data);

    res.json(deleted);
  } catch (error) {
    next(error);
  }
};

export const getWishListById: Controller = async (req, res, next) => {
  try {
    const { currentWishList } = req.body;

    const wishList = await wishListHelper.getById(currentWishList);

    res.json(wishList);
  } catch (error) {
    next(error);
  }
};

export const getAllWishListsByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const wishList = await wishListHelper.getAllByUserId(userId);

    res.json(wishList);
  } catch (error) {
    next(error);
  }
};

export const addWishGood: Controller = async (req, res, next) => {
  try {
    const { userId, goodId, currentWishList } = req.body;

    const control = await wishListHelper.addWish(userId, goodId, currentWishList);

    res.json(control);
  } catch (error) {
    next(error);
  }
};
