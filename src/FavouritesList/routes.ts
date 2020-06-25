import * as express from 'express';

import { addFavouriteGood, createFavouritesList, getFavouriteListByUserId } from './controller';

export default express
  .Router()
  .post('/createFavouritesList', createFavouritesList)
  .get('/getFavouriteListByUserId', getFavouriteListByUserId)
  .post('/addFavouriteGood', addFavouriteGood);
