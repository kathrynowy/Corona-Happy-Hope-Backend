import * as express from 'express';

import { addIdea, createIdeasList, getAll } from './controller';

export default express
  .Router()
  .post('/createIdeasList', createIdeasList)
  .get('/getAll', getAll)
  .post('/addIdea', addIdea);
