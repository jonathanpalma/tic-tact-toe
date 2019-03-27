export const getBoardState = state => state.gameStatus.boardState;
export const getHasFinished = state => state.gameStatus.hasFinished;
export const getIsTurnPlayer1 = state => state.gameStatus.isTurnPlayer1;
export const getMoveCounter = state => state.gameStatus.moveCounter;
export const getWinner = state => state.gameStatus.winner;
export const getSquareStateByPosition = (state, position) =>
  state.gameStatus.boardState[position.x][position.y];
