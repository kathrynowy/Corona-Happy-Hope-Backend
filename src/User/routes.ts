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
} from './controller';

export default express
  .Router()
  .post('/signUp', signUp)
  .post('/getUserById', getUserById)
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
  .get('/google-auth/callback', passport.authenticate('google'), (req, res, ...rest) => {
    // console.log('req', req);

    res.redirect(`http://localhost:3001/home?google=true`);

    // return res.json((req as any).user);
  })
  .get('/getFollowers', getFollowersByUserId)
  .post('/addToFollowing', addToFollowing)
  .get('/getUsersByName', getUsersByName)
  .get('/getAmountOfBookedGoodsByUser', getAmountOfBookedGoodsByUser)
  .post('/changeCurrentWishlist', changeCurrentWishlist)
  .get('/getFollowing', getFollowingByUserId);
