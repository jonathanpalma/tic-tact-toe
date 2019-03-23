import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from 'helpers/localStorage';

const composeEnhancers =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares =
  process.env.NODE_ENV !== 'production'
    ? [sagaMiddleware, createLogger({})]
    : [sagaMiddleware];

const configureStore = (initialState = loadState()) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // sagaMiddleware.run(myAwesomeSaga);

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }),
    1000
  );

  return store;
};

export default configureStore;
