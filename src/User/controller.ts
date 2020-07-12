import favouriteListHelper from '../FavouritesList/helpers';
import { generateHash } from '../passport/service';
import { Controller } from '../types/controller';
import wishListHelper from '../WishList/helpers';
import userHelper from './helpers';
import { GetUserAuthInfoRequest } from './model';

export const signUp: Controller = async (req, res, next) => {
  console.log('body', req.body);
  const isUserExist = await userHelper.checkUserExistence(req.body.email);

  if (isUserExist && isUserExist.length) {
    return res.status(500).json({ error: 'email must be unick' });
  } else {
    try {
      const newUser = await userHelper.create({
        ...req.body,
        password: generateHash(req.body.password),
      });

      const wishlist = await wishListHelper.create({ userId: newUser.id, name: 'вишлист', goods: [] });
      await favouriteListHelper.create({ userId: newUser.id, goods: [] });

      await userHelper.addCurrentWishlist(newUser.id, wishlist.id);

      res.json(newUser);
    } catch (error) {
      next(error);
    }
  }
};

export const changeCurrentWishlist: Controller = async (req, res, next) => {
  try {
    const { userId, wishListId } = req.body;

    res.json(await userHelper.addCurrentWishlist(userId, wishListId));
  } catch (error) {
    next(error);
  }
};

export const getUserById: Controller = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const newuser = await userHelper.getById(userId);

    res.json(newuser);
  } catch (error) {
    next(error);
  }
};

export const bookGood: Controller = async (req, res, next) => {
  try {
    const { userId, bookUserId, goodId, wishListId } = req.body;

    const isAlreadyBooked = await wishListHelper.getBookedGood(wishListId, goodId);

    let good;

    if (!isAlreadyBooked) {
      good = await userHelper.bookGood(userId, { bookUserId, goodId, wishListId });

      const addedToWishListBookedGoods = await wishListHelper.addBookedGood(wishListId, goodId);
    } else {
      good = await userHelper.unbookGood(userId, { bookUserId, goodId, wishListId });

      const removeFromWishListBookedGoods = await wishListHelper.removeBookedGood(wishListId, goodId);
    }

    res.json(good);
  } catch (error) {
    next(error);
  }
};

export const getUsersByName: Controller = async (req, res, next) => {
  try {
    const { name, userId } = req.query;

    const users = await userHelper.getByName(name, userId);

    res.json(users);
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

    const currentUser = await userHelper.getById(userId);

    const isAlreadyFollowing = currentUser.following.includes(followingId);

    if (!isAlreadyFollowing) {
      await userHelper.addToFollowing(userId, followingId);
    } else {
      await userHelper.deleteFromFollowing(userId, followingId);
    }

    res.json({});
  } catch (error) {
    console.log('err', error);
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

export const signIn: Controller = async (req: GetUserAuthInfoRequest, res, next) => {
  try {
    return res.status(200).json({
      email: req.body.email,
      token: req.body.token,
      id: req.body.id,
      city: req.body.city,
      country: req.body.country,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      currentWishlist: req.body.currentWishlist,
    }); // TODO:
  } catch (error) {
    next(error);
  }
};
