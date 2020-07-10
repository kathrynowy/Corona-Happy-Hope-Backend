import * as config from 'config';
import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';

import * as path from 'path';
import * as defaultConfig from '../../config/development.json';

const configDir = path.resolve(__dirname, '../../config');
config.util.setModuleDefaults('NODE_ENV', config.util.loadFileConfigs(configDir));
const dbConfig = config.get('NODE_ENV').dbConfig;

/* tslint:disable:no-console */
const connectWithRetry = () => {
  mongoose
    .connect(dbConfig.uri || defaultConfig.dbConfig.uri, { useNewUrlParser: true })
    .then(async () => console.log('Connection to DB established successfully', dbConfig.uri))
    .catch((error) => {
      console.log('Connection to DB failed', error);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
autoIncrement.initialize(mongoose.connection);

export default mongoose;
