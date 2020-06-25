import { Controller } from '../types/controller';
import userHelper from './helpers';

export const signUp: Controller = async (req, res, next) => {
  try {
    const user = await userHelper.create(req.body);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getUserById: Controller = async (req, res, next) => {
  try {
    const { userId } = req.body;

    res.json(await userHelper.getById(userId));
  } catch (error) {
    next(error);
  }
};

export const getFollowersByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.query;

    const user = await userHelper.getFollowersById(userId);

    res.json(user.followers);
  } catch (error) {
    next(error);
  }
};

export const addToFollowing: Controller = async (req, res, next) => {
  try {
    const { userId, followingId } = req.body;

    await userHelper.addToFollowing(userId, followingId);

    res.json({});
  } catch (error) {
    console.log('errrr', error);
    next(error);
  }
};

export const getFollowingByUserId: Controller = async (req, res, next) => {
  try {
    const { userId } = req.query;

    const user = await userHelper.getFollowingById(userId);

    res.json(user.following);
  } catch (error) {
    next(error);
  }
};

export const signIn: Controller = async (req, res, next) => {
  try {
    const { login, password } = req.query;

    res.json(await userHelper.signIn(login, password));
  } catch (error) {
    next(error);
  }
};
