import { combineReducers } from 'redux';
import gameConfigReducer from './gameConfigReducer';

export default combineReducers({
  gameConfig: gameConfigReducer,
});
