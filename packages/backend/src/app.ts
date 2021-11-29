import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 3030;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.send(`<h1>Hello from the server side!</h1>`);
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
