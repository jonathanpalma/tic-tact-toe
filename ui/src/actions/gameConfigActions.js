import { gameConfigConstants } from 'constants/actionTypes';

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
  setPlayer1,
  setPlayer2,
  setBoardSize,
};

export default gameConfigActions;
