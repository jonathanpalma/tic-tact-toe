const production = commons =>
  Object.assign(commons, {
    loggerOptions: Object.assign(commons.loggerOptions, {
      prettyPrint: false,
      humanReadableUnhandledException: false,
      colorize: false,
    }),
  });

module.exports = production;
