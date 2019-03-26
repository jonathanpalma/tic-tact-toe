import { gameConfigConstants } from 'constants/actionTypes';

const clearGameConfig = () => ({
  type: gameConfigConstants.GAME_CONFIG_CLEAR,
});
const clearPlayer1 = () => ({
  type: gameConfigConstants.PLAYER_1_CLEAR,
});
const clearPlayer2 = () => ({
  type: gameConfigConstants.PLAYER_2_CLEAR,
});
const setPlayer1 = id => ({
  type: gameConfigConstants.PLAYER_1_SET,
  payload: id,
});
const setPlayer2 = id => ({
  type: gameConfigConstants.PLAYER_2_SET,
  payload: id,
});
const setBoardSize = size => ({
  type: gameConfigConstants.BOARD_SIZE_SET,
  payload: size,
});

const gameConfigActions = {
  clearGameConfig,
  clearPlayer1,
  clearPlayer2,
  setPlayer1,
  setPlayer2,
  setBoardSize,
};

export default gameConfigActions;
