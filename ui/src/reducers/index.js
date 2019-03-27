import { combineReducers } from 'redux';
import gameConfigReducer from './gameConfigReducer';
import helpReducer from './helpReducer';

export default combineReducers({
  gameConfig: gameConfigReducer,
  help: helpReducer,
});
