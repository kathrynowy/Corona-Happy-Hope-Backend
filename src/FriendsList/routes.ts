import * as express from 'express';

import { addFriend, createFriendList, editFriendList, getAllFriendListsByUserId, getListById } from './controller';

export default express
  .Router()
  .post('/createFriendList', createFriendList)
  .post('/getListById', getListById)
  .get('/getAllFriendListsByUserId', getAllFriendListsByUserId)
  .post('/editFriendList', editFriendList)
  .post('/addFriend', addFriend);
