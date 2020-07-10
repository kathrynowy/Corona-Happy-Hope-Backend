import * as express from 'express';

import {
  addWishGood,
  createWishList,
  deleteWish,
  editWishList,
  getAllWishListsByUserId,
  getWishListById,
} from './controller';

export default express
  .Router()
  .post('/createWishList', createWishList)
  .post('/getWishListById', getWishListById)
  .post('/getAllWishListsByUserId', getAllWishListsByUserId)
  .post('/addWishGood', addWishGood)
  .post('/editWishList', editWishList)
  .post('/deleteWish', deleteWish);
