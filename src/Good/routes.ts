import * as express from 'express';

import { addGood, getGoodById } from './controller';

export default express.Router().post('/addGood', addGood).get('/getGoodById', getGoodById);
