const expressWinston = require('express-winston');

const errorLogger = logger => expressWinston.errorLogger({ winstonInstance: logger });

module.exports = errorLogger;
