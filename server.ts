import * as env from 'dotenv';
import * as express from 'express';

import middlewares from './src/middlewares';

const app = express();

const result = env.config({ path: `${__dirname}/.env` });

if (result.error) {
  throw result.error;
}

/* tslint:disable:no-console */
console.log(result.parsed);

middlewares(app);

export default app;
