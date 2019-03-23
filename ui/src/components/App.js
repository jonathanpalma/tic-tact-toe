import React from 'react';
import Log from 'helpers/Log';

const logger = new Log('App Component');

const App = () => {
  logger.trace('I log some trace when I am not in production :)');
  return (
    <div>
      <p>I will be an awesome tic tac toe :)</p>
    </div>
  );
};

export default App;
