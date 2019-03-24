require('dotenv').config();

const commons = {
  env: process.env.NODE_ENV,
  keys: {
    mongoURI: process.env.MONGO_URI,
  },
  loggerOptions: {
    level: 'debug',
    stringify: false,
    json: true,
    timestamp: true,
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
        loggerOptions: Object.assign(commons.loggerOptions, {
          prettyPrint: true,
          humanReadableUnhandledException: true,
          colorize: true,
        }),
      })
    : Object.assign(commons, {
        loggerOptions: Object.assign(commons.loggerOptions, {
          prettyPrint: false,
          humanReadableUnhandledException: false,
          colorize: false,
        }),
      });

module.exports = Object.freeze(Object.assign({}, config));
