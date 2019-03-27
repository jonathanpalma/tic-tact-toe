import { gameStatusConstants } from 'constants/actionTypes';
import { StatesEnum } from 'constants/constants';
import {
  getSquareStateByPosition,
  getIsTurnPlayer1,
  getBoardState,
} from 'selectors/gameStatusSelectors';

const finishGame = () => ({
  type: gameStatusConstants.GAME_FINISH,
});
const restartGame = () => ({
  type: gameStatusConstants.GAME_RESTART,
});
const setWinner = player => ({
  type: gameStatusConstants.WINNER_SET,
  payload: player,
});
const setBoardState = state => ({
  type: gameStatusConstants.BOARD_STATE_SET,
  payload: state,
});
const evaluateMove = position => (dispatch, getState) => {
  const state = getState();
  if (getSquareStateByPosition(state, position) === StatesEnum.BLANK) {
    const { x, y } = position;
    const newBoardState = getBoardState(state).map((row, i) =>
      row.map((squareState, j) => {
        if (i === x && j === y) {
          return getIsTurnPlayer1(state) ? StatesEnum.X : StatesEnum.O;
        }
        return squareState;
      })
    );
    dispatch(setBoardState(newBoardState));
  }
};

const gameStatusActions = {
  evaluateMove,
  finishGame,
  restartGame,
  setBoardState,
  setWinner,
};

export default gameStatusActions;
