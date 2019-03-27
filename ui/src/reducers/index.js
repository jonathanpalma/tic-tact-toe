import { combineReducers } from 'redux';
import gameConfigReducer from './gameConfigReducer';
import helpReducer from './helpReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  gameConfig: gameConfigReducer,
  help: helpReducer,
  score: scoreReducer,
});
