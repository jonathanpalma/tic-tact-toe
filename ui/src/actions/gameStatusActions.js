import { gameStatusConstants } from 'constants/actionTypes';

const finishGame = () => ({
  type: gameStatusConstants.GAME_FINISH,
});
const moveGame = position => ({
  type: gameStatusConstants.GAME_MOVE,
  payload: position,
});
const restartGame = () => ({
  type: gameStatusConstants.GAME_RESTART,
});
const setWinner = player => ({
  type: gameStatusConstants.WINNER_SET,
  payload: player,
});

const gameStatusActions = {
  finishGame,
  moveGame,
  restartGame,
  setWinner,
};

export default gameStatusActions;
