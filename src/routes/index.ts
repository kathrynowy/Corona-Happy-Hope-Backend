import * as express from 'express';

import favouritesList from '../FavouritesList/routes';
import friendsList from '../FriendsList/routes';
import goods from '../Good/routes';
import goodsList from '../GoodsList/routes';
import ideas from '../Ideas/routes';
import user from '../User/routes';
import wishList from '../WishList/routes';

export default express
  .Router()
  .use('/user', user)
  .use('/goods', goods)
  .use('/goodsList', goodsList)
  .use('/friendsList', friendsList)
  .use('/wishList', wishList)
  .use('/ideas', ideas)
  .use('/favouritesList', favouritesList);
