import 'reflect-metadata';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import logger from 'morgan';

import { User } from './db/models';
import { connect } from './db/services';

dotenv.config();

const PORT = process.env.PORT || 3030;
const app: Express = express();

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

connect()
  .then(async connection => {
    app.get('/initialize-user', async (_req: Request, res: Response) => {
      const repository = connection.getRepository(User);
      const user = await repository.findOne({ email: 'test@test.com' });

      if (user) {
        res.send(`<h1>User has already been created!</h1>`);
      } else {
        const newUser = new User();

        newUser.firstName = 'Admin';
        newUser.lastName = 'Adminuser';
        newUser.email = 'test@test.com';

        await repository.save(newUser);

        res.send(`<h1>User was initialized</h1>`);
      }
    });

    app.get('/', (_req: Request, res: Response) => {
      res.send(`
      <h1>Hello from the server side!</h1>
      <h3>${connection.isConnected}</h3>
    `);
    });
  })
  .catch(error => {
    app.get('/', (_req: Request, res: Response) => {
      res.send(`
      <h1>Hello from the server side!</h1>
      <h3>Error: ${error}</h3> 
    `);
    });
  });
