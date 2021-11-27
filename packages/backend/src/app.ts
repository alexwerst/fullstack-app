import express from 'express';

const app = express();
const port = 3030;

app.get('/', (_req, res) => {
  res.status(200).send('Hello from the server side!')
});
app.listen(port, () => console.log(`App running on port ${port}...`));
