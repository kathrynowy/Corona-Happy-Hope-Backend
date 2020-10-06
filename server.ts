import * as env from 'dotenv';
import * as express from 'express';

import middlewares from './src/middlewares';

const app = express();

env.config();

middlewares(app);

export default app;
