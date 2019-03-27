import { gameStatusConstants } from 'constants/actionTypes';
import { StatesEnum } from 'constants/constants';
import {
  getSquareStateByPosition,
  getIsTurnPlayer1,
  getBoardState,
  getMoveCounter,
} from 'selectors/gameStatusSelectors';
import TicTacToe from 'helpers/TicTacToe';
import { getBoardSize } from 'selectors/gameConfigSelectors';
import scoreActions from './scoreActions';

const incrementMoveCounter = () => ({
  type: gameStatusConstants.MOVE_COUNTER_INCREMENT,
});
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
  const currentSquareState = getIsTurnPlayer1(state)
    ? StatesEnum.X
    : StatesEnum.O;

  if (getSquareStateByPosition(state, position) === StatesEnum.BLANK) {
    const { x, y } = position;
    const newBoardState = getBoardState(state).map((row, i) =>
      row.map((squareState, j) => {
        if (i === x && j === y) {
          return currentSquareState;
        }
        return squareState;
      })
    );
    const newBoard = { size: getBoardSize(state), state: newBoardState };
    const ticTacToe = new TicTacToe(newBoard);

    if (ticTacToe.hasYouWon(x, y, currentSquareState)) {
      dispatch(setWinner(currentSquareState));
      if (currentSquareState === StatesEnum.X) {
        dispatch(scoreActions.incrementPlayer1Score());
      } else {
        dispatch(scoreActions.incrementPlayer2Score());
      }
    } else if (ticTacToe.hasYouTied(getMoveCounter(state) + 1)) {
      dispatch(finishGame());
      dispatch(scoreActions.incrementDrawScore());
    }

    dispatch(setBoardState(newBoardState));
  }
};

const gameStatusActions = {
  evaluateMove,
  finishGame,
  incrementMoveCounter,
  restartGame,
  setBoardState,
  setWinner,
};

export default gameStatusActions;
