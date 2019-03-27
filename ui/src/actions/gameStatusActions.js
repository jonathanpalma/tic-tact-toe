import { gameStatusConstants } from 'constants/actionTypes';

const finishGame = () => ({
  type: gameStatusConstants.GAME_FINISH,
});
const nextTurn = () => ({
  type: gameStatusConstants.TURN_NEXT,
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
  nextTurn,
  restartGame,
  setWinner,
};

export default gameStatusActions;
