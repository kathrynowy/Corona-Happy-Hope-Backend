import * as express from 'express';
import * as passport from 'passport';

import {
  addToFollowing,
  bookGood,
  changeCurrentWishlist,
  getAmountOfBookedGoodsByUser,
  getBookedGoodsByUser,
  getBookedGoodsForUser,
  getFollowersByUserId,
  getFollowingByUserId,
  getUserById,
  getUsersByName,
  signIn,
  signUp,
  createPassword,
  changeUserData,
} from './controller';

export default express
  .Router()
  .post('/signUp', signUp)
  .post('/getUserById', getUserById)
  .post('/changeUserData', changeUserData)
  .post('/bookGood', bookGood)
  .get('/bookedGoodsForUser', getBookedGoodsForUser)
  .get('/bookedGoodsByUser', getBookedGoodsByUser)
  .post('/signIn', passport.authenticate('local-login', { session: false }), signIn)
  .get(
    '/google-auth',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  )
  .get('/google-auth/callback', passport.authenticate('google'), (req: any, res, ...rest) => {
    console.log('req', req.user);

    const { token, userData } = req.user;

    console.log('user', userData);

    if (userData.isAuthFinished) {
      return res.redirect(
        `http://localhost:3001/create-password?authCompleted=true&id=${userData._id}&email=${userData.email}&firstName=${userData.firstName}&lastName=${userData.lastName}&token=${token}&currentWishList=${userData.currentWishList}`,
      );
    }

    res.redirect(
      `http://localhost:3001/create-password?id=${userData._id}&email=${userData.email}&firstName=${userData.firstName}&lastName=${userData.lastName}`,
    );
  })
  .get('/getFollowers', getFollowersByUserId)
  .post('/addToFollowing', addToFollowing)
  .get('/getUsersByName', getUsersByName)
  .get('/getAmountOfBookedGoodsByUser', getAmountOfBookedGoodsByUser)
  .post('/changeCurrentWishlist', changeCurrentWishlist)
  .post('/createPassword', createPassword)
  .get('/getFollowing', getFollowingByUserId);
