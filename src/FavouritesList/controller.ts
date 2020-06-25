import { Controller } from '../types/controller';
import favouritesListHelper from './helpers';

export const createFavouritesList: Controller = async (req, res, next) => {
  try {
    const list = await favouritesListHelper.create(req.body);

    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getFavouriteListByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.query;

    const favourites = await favouritesListHelper.getByUserId(userId);

    res.json(favourites[0]);
  } catch (error) {
    next(error);
  }
};

export const addFavouriteGood: Controller = async (req, res, next) => {
  try {
    const { userId, goodId } = req.body;

    const control = await favouritesListHelper.addFavourite(userId, goodId);

    res.json(control);
  } catch (error) {
    next(error);
  }
};
