require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const PORT = process.env.PORT || 1234;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, async () => {

  routes(app);

  console.log(`This server is runnig on http://localhost:${PORT}`);

})
