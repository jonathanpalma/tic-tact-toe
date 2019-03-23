import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import Root from 'components/Root';
import './index.css';

import * as serviceWorker from 'helpers/serviceWorker';

const { NODE_ENV, REACT_APP_NAME } = process.env;
if (NODE_ENV !== 'production') {
  localStorage.setItem('debug', `${REACT_APP_NAME}:*`);
}

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
