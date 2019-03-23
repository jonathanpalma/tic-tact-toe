import debug from 'debug';

const { REACT_APP_NAME } = process.env;
const COLOURS = {
  error: 'red',
  info: 'aqua',
  trace: 'green',
  warn: 'orange',
};

class Log {
  constructor(source) {
    this.source = source;
  }

  // eslint-disable-next-line class-methods-use-this
  generateMessage(level, message) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${REACT_APP_NAME}:${level}`;
    const createDebug = debug(namespace);

    // Set the colour of the message based on the level
    createDebug.color = COLOURS[level];
    createDebug(this.source || '', message);
  }

  trace(message, source) {
    return this.generateMessage('trace', message, source);
  }

  info(message, source) {
    return this.generateMessage('info', message, source);
  }

  warn(message, source) {
    return this.generateMessage('warn', message, source);
  }

  error(message, source) {
    return this.generateMessage('error', message, source);
  }
}

export default Log;
