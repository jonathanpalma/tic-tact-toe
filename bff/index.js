const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const logger = require('./helpers/logger');

const scoreRouter = require('./routes/scoreRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
