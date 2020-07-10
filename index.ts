import * as http from 'http';

import app from './server';
import mongoose from './src/context';

const server = new http.Server(app);
const port = process.env.PORT || 7000;

mongoose.connection.on('open', () => {
  server.listen(port, () => console.log(`Server is starting on port - ${port}`));
});
