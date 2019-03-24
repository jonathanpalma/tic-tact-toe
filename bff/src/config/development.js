const development = commons =>
  Object.assign(commons, {
    loggerOptions: Object.assign(commons.loggerOptions, {
      prettyPrint: true,
      humanReadableUnhandledException: true,
      colorize: true,
    }),
  });

module.exports = development;
