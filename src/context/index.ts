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
    .connect('mongodb+srv://kathrynowy:katerina99@cluster0-lawht.mongodb.net/wishmarket?retryWrites=true', {
      useNewUrlParser: true,
    })
    .then(async () =>
      console.log(
        'Connection to DB established successfully',
        'mongodb+srv://kathrynowy:katerina99@cluster0-lawht.mongodb.net/wishmarket?retryWrites=true',
      ),
    )
    .catch((error) => {
      console.log('Connection to DB failed', error);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
autoIncrement.initialize(mongoose.connection);

export default mongoose;
