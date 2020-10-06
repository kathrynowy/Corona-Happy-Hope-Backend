import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as passport from 'passport';

import '../passport';
import mainRouter from '../routes';
import errorHandler from './error';
import logger from './logger';
import notFoundHandler from './not-found';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(logger);
  app.use(cors());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(passport.initialize());
  app.use(mainRouter);
  app.all('*', notFoundHandler);
  app.use(errorHandler);
};
