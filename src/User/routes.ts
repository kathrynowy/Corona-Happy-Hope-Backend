import * as express from 'express';
import * as passport from 'passport';

import {
  addToFollowing,
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
  .post('/signIn', passport.authenticate('local-login', { session: false }), signIn)
  .get('/getFollowers', getFollowersByUserId)
  .post('/addToFollowing', addToFollowing)
  .get('/getUsersByName', getUsersByName)
  .get('/getFollowing', getFollowingByUserId);
