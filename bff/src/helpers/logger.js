const winston = require('winston');
const config = require('../config');

const { loggerOptions } = config;

const logger = winston.createLogger({
  transports: [new winston.transports.Console(loggerOptions)],
});

module.exports = logger;
