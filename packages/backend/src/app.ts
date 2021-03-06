import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import logger from 'morgan';

import userRoute from './routes/user.route';

const app: Express = express();

app.use(express.json());

app.use((_req, _res, next) => {
  console.log(`Request time: ${new Date().toISOString()}`);
  next();
});

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send(`<h1>Hello from the server side!</h1>`);
});

app.use('/api/users', userRoute);

export default app;
