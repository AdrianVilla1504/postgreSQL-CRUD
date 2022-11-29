require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const PORT = process.env.PORT || 1234;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const db = new PrismaClient();

app.listen(PORT, async () => {

  db.$connect();

  routes(app);

  console.log(`This server is runnig on http://localhost:${PORT}`);

})
