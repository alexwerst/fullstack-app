import 'reflect-metadata';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import mysql from 'mysql';
import { createConnection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { mainConfig } from './config';
import { User } from './db/models';

dotenv.config();

const PORT = process.env.PORT || 3030;
const app: Express = express();

const dbConnection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

dbConnection.connect((err: Error) => {
  if (err) {
    console.log('ERROR');
    throw err;
  }

  console.log('Connected!');
});
console.log(mainConfig.database);
createConnection(mainConfig.database as MysqlConnectionOptions).then(async connection => {
  const repository = connection.getRepository(User);
  const user = new User();
  user.firstName = 'Admin';
  user.lastName = 'Adminuser';

  await repository.save(user);

  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (_req: Request, res: Response) => {
    res.send(`
    <h1>Hello from the server side!</h1>
    <h3>DB connection: ${dbConnection.state}</h3> 
  `);
  });

  app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
});
