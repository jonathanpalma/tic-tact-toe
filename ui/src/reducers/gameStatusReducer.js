import {
  gameConfigConstants,
  gameStatusConstants,
} from 'constants/actionTypes';
import isNumber from 'lodash/isNumber';
import genStateMatrix from 'helpers/genStateMatrix';
import { StatesEnum } from 'constants/constants';

export const initialState = {
  boardState: genStateMatrix(3),
  hasFinished: false,
  isTurnPlayer1: true,
  moveCounter: 0,
  winner: undefined,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case gameConfigConstants.BOARD_SIZE_SET:
      return isNumber(payload)
        ? { ...state, boardState: genStateMatrix(Number(payload)) }
        : state;
    case gameStatusConstants.GAME_MOVE:
      return state.boardState[payload.x][payload.y] === StatesEnum.BLANK
        ? {
            ...state,
            isTurnPlayer1: !state.isTurnPlayer1,
            moveCounter: state.moveCounter + 1,
            boardState: state.boardState.map((row, x) =>
              row.map((squareState, y) => {
                if (x === payload.x && y === payload.y) {
                  return state.isTurnPlayer1 ? StatesEnum.X : StatesEnum.O;
                }
                return squareState;
              })
            ),
          }
        : state;
    case gameStatusConstants.GAME_FINISH:
      return { ...state, hasFinished: true };
    case gameStatusConstants.GAME_RESTART:
      return { ...initialState };
    case gameStatusConstants.WINNER_SET:
      return { ...state, winner: payload };
    default:
      return state;
  }
};
