const express = require('express');
const app = express();
const cors = require('cors');
const subjectsRouter = require('./controllers/subjects');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

const db = "ppdb";
const url = "mongodb://127.0.0.1/" + db;

logger.info('connecting to', url);

mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message);
  })

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use('/', subjectsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;