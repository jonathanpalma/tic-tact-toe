const expressWinston = require('express-winston');

const requestLogger = logger => {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  return expressWinston.logger({ winstonInstance: logger });
};

module.exports = requestLogger;
