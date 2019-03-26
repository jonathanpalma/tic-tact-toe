import { gameConfigConstants } from 'constants/actionTypes';
import { getPlayer1Id, getPlayer2Id } from 'selectors/gameConfigSelectors';

const clearGameConfig = () => ({
  type: gameConfigConstants.GAME_CONFIG_CLEAR,
});
const clearPlayer1 = () => ({
  type: gameConfigConstants.PLAYER_1_CLEAR,
});
const clearPlayer2 = () => ({
  type: gameConfigConstants.PLAYER_2_CLEAR,
});
const setPlayer1Error = err => ({
  type: gameConfigConstants.PLAYER_1_ERROR,
  payload: err,
});
const setPlayer1Id = id => ({
  type: gameConfigConstants.PLAYER_1_SET,
  payload: id,
});
const setPlayer2Error = err => ({
  type: gameConfigConstants.PLAYER_2_ERROR,
  payload: err,
});
const setPlayer2Id = id => ({
  type: gameConfigConstants.PLAYER_2_SET,
  payload: id,
});
const setBoardSize = size => ({
  type: gameConfigConstants.BOARD_SIZE_SET,
  payload: size,
});

// thunks
const setPlayer1 = id => (dispatch, getState) => {
  if (id !== getPlayer2Id(getState())) {
    dispatch(setPlayer1Id(id));
  } else {
    dispatch(setPlayer1Error('Debes seleccionar un usuario diferente'));
  }
};
const setPlayer2 = id => (dispatch, getState) => {
  if (id !== getPlayer1Id(getState())) {
    dispatch(setPlayer2Id(id));
  } else {
    dispatch(setPlayer2Error('Debes seleccionar un usuario diferente'));
  }
};

const gameConfigActions = {
  clearGameConfig,
  clearPlayer1,
  clearPlayer2,
  setBoardSize,
  setPlayer1,
  setPlayer1Error,
  setPlayer2,
  setPlayer2Error,
};

export default gameConfigActions;
