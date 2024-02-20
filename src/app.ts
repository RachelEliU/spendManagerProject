import express from 'express';
const router = require('./route/route.js')
import { DataHndler } from './DAL/dataHandler.js';
import { config } from './config.js';
import { Validation } from './validation.js';

const app = express();
const PORT = 3001;
const validation = new Validation();
const PORT1 = config.port;
export const dataHandler = new DataHndler();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
module.exports = app;