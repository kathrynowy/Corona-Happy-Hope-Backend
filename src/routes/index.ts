import * as express from 'express';

import favouritesList from '../FavouritesList/routes';
import goods from '../Good/routes';
import goodsList from '../GoodsList/routes';
import ideas from '../Ideas/routes';
import user from '../User/routes';

export default express
  .Router()
  .use('/user', user)
  .use('/goods', goods)
  .use('/goodsList', goodsList)
  .use('/ideas', ideas)
  .use('/favouritesList', favouritesList);
