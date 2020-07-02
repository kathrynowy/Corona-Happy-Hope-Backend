import * as express from 'express';

import { addFriend, createFriendList, getAllFriendListsByUserId } from './controller';

export default express
  .Router()
  .post('/createFriendList', createFriendList)
  .get('/getAllFriendListsByUserId', getAllFriendListsByUserId)
  .post('/addFriend', addFriend);
