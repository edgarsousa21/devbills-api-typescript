import express, { json } from 'express';

const app = express();

app.use(json());

const port = 3333;

app.listen(3333, () => console.log(`🚀 App is running at port ${port}!`));


