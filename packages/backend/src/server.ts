import 'reflect-metadata';

import dotenv from 'dotenv';

import app from './app';
import { createDBConnection } from './db/services';

dotenv.config();

const PORT = process.env.PORT || 3030;

createDBConnection()
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
  })
  .catch(error => console.log(`Error: ${error.message}`));
