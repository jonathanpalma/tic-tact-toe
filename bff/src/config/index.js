require('dotenv').config();

const commons = {
  env: process.env.NODE_ENV,
  keys: {
    mongoURI: process.env.MONGO_URI,
  },
  mongooseOptions: {
    autoReconnect: true,
    bufferMaxEntries: false,
    connectTimeoutMS: 5000,
    reconnectInterval: 5000,
    reconnectTries: 5,
    useNewUrlParser: true,
  },
  port: 3001,
};

const config =
  process.env.NODE_ENV !== 'production'
    ? Object.assign(commons, {
        loggerOptions: {
          prettyPrint: true,
          level: 'debug',
          stringify: false,
          humanReadableUnhandledException: true,
          json: true,
          colorize: true,
          timestamp: true,
        },
      })
    : Object.assign(commons, {
        loggerOptions: {
          prettyPrint: false,
          level: 'debug',
          stringify: false,
          humanReadableUnhandledException: false,
          json: true,
          colorize: false,
          timestamp: true,
        },
      });

module.exports = Object.freeze(Object.assign({}, config));
