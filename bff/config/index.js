const commons = {
  env: process.env.NODE_ENV,
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
