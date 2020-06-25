import * as express from 'express';

import { addToFollowing, getFollowersByUserId, getFollowingByUserId, getUserById, signIn, signUp } from './controller';

export default express
  .Router()
  .post('/signUp', signUp)
  .post('/getUserById', getUserById)
  .post('/signIn', signIn)
  .get('/getFollowers', getFollowersByUserId)
  .post('/addToFollowing', addToFollowing)
  .get('/getFollowing', getFollowingByUserId);
