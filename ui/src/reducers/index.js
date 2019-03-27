import { combineReducers } from 'redux';
import gameConfigReducer from './gameConfigReducer';
import gameStatusReducer from './gameStatusReducer';
import helpReducer from './helpReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  gameConfig: gameConfigReducer,
  gameStatus: gameStatusReducer,
  help: helpReducer,
  score: scoreReducer,
});
