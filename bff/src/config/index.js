const development = require('./development');
const production = require('./production');
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
  // eslint-disable-next-line prettier/prettier
  process.env.NODE_ENV !== 'production'
    ? development(commons)
    : production(commons);

module.exports = Object.freeze(Object.assign({}, config));
