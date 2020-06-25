import mongoose = require('mongoose');
import { Controller } from '../types/controller';
import ideasHelper from './helpers';

export const createIdeasList: Controller = async (req, res, next) => {
  try {
    const goods = req.body.goods.split(',');
    const convertedGoods = goods.map((good: any) => mongoose.Types.ObjectId(good.trim()));

    const ideas = await ideasHelper.create(req.body.amountofIdeas, convertedGoods);

    res.json(ideas);
  } catch (error) {
    next(error);
  }
};

export const getAll: Controller = async (req, res, next) => {
  try {
    const allGoods = await ideasHelper.getAll();

    res.json(allGoods[0]);
  } catch (error) {
    next(error);
  }
};

export const addIdea: Controller = async (req, res, next) => {
  try {
    const { ideasId, goodId } = req.query;

    res.json(await ideasHelper.addIdea(ideasId, goodId));
  } catch (error) {
    next(error);
  }
};
