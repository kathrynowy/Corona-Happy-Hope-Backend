import * as express from 'express';

import { addGood, createGoodsList, getAllGoodListsByUserId } from './controller';

export default express
  .Router()
  .post('/createGoodList', createGoodsList)
  .get('/getAllGoodListsByUserId', getAllGoodListsByUserId)
  .post('/addFriend', addGood);
