import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'components/App';
import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import RankingPage from 'components/RankingPage';
import Root from 'components/Root';
import './index.css';

import * as serviceWorker from 'helpers/serviceWorker';

const { NODE_ENV, REACT_APP_NAME } = process.env;
if (NODE_ENV !== 'production') {
  localStorage.setItem('debug', `${REACT_APP_NAME}:*`);
}

ReactDOM.render(
  <Root>
    <Router>
      <App>
        <Switch>
          <Route path="/ranking" component={RankingPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={NotFound} status={404} />
        </Switch>
      </App>
    </Router>
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
