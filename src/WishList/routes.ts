import * as express from 'express';

import { addWishGood, createWishList, deleteWish, getAllWishListsByUserId, getWishListByUserId } from './controller';

export default express
  .Router()
  .post('/createWishList', createWishList)
  .post('/getWishListByUserId', getWishListByUserId)
  .post('/getAllWishListsByUserId', getAllWishListsByUserId)
  .post('/addWishGood', addWishGood)
  .post('/deleteWish', deleteWish);
