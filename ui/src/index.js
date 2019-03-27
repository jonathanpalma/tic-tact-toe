import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'components/App';
import Root from 'components/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as serviceWorker from 'helpers/serviceWorker';

// Implementing async router using lazy and Suspense.
// In this way, the initial JS bundle will be super small and
// it would worry about pulling the real content after-the-fact
// while is displaying a loading message as a fallback.
const HomePage = lazy(() => import('components/HomePage'));
const NotFound = lazy(() => import('components/NotFound'));
const RankingPage = lazy(() => import('components/RankingPage'));

// At this moment lazy and Suspense are not yet available for
// server-side rendering. If you need it, go back to the sync way...
// import HomePage from 'components/HomePage';
// import NotFound from 'components/NotFound';
// import RankingPage from 'components/RankingPage';

const { NODE_ENV, REACT_APP_NAME } = process.env;
if (NODE_ENV !== 'production') {
  localStorage.setItem('debug', `${REACT_APP_NAME}:*`);
}

ReactDOM.render(
  <Root>
    <Router>
      <App>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/ranking" component={RankingPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="*" component={NotFound} status={404} />
          </Switch>
        </Suspense>
      </App>
    </Router>
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
