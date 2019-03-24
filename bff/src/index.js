const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./helpers/logger');
const errorLogger = require('./middlewares/errorLogger');
const requestLogger = require('./middlewares/requestLogger');
const scoreRouter = require('./routes/scoreRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// logger
app.use(errorLogger(logger));
app.use(requestLogger(logger));

// routes
app.use('/scores', scoreRouter);
app.use('/users', userRouter);

// database
const db = mongoose.connection;
let connectionRetries = 1;
let reconnectionTimeout;

const { keys, mongooseOptions } = config;
const connectMongoose = () => {
  try {
    clearTimeout(reconnectionTimeout);
    mongoose.connect(keys.mongoURI, mongooseOptions).then(
      () => {},
      err => {
        logger.error(`${connectionRetries} - Mongodb connection rejected. Retrying in 5 sec.`, err);
        connectionRetries += 1;
        mongoose.disconnect();
        reconnectionTimeout = setTimeout(connectMongoose, 5000);
      }
    );
  } catch (err) {
    logger.error('Error trying to connect to mongodb', err);
  }
};

connectMongoose();

db.once('open', () => {
  logger.info('Mongodb connection open...');
});

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  logger.info(`Started on port ${PORT}`);
});

process.on('SIGINT', () => {
  db.close(() => {
    logger.info('Mongoose default connection disconnected through app termination');
    process.exit();
  });
});
