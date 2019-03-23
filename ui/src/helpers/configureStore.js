import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const composeEnhancers =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middlewares =
  process.env.NODE_ENV !== 'production'
    ? [createLogger({})]
    : [];

const configureStore = (initialState = loadState()) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }), 1000);

  return store;
};

export default configureStore;
