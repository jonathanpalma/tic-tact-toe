const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  logger.info(`Started on port ${PORT}`);
});

process.on('SIGINT', () => {
  logger.info('Server shutting down');
  process.exit();
});
