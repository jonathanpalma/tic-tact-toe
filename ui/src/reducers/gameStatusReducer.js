import {
  gameConfigConstants,
  gameStatusConstants,
} from 'constants/actionTypes';
import isNumber from 'lodash/isNumber';
import genStateMatrix from 'helpers/genStateMatrix';

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
        ? { ...initialState, boardState: genStateMatrix(Number(payload)) }
        : state;
    case gameStatusConstants.BOARD_STATE_SET:
      return {
        ...state,
        moveCounter: state.moveCounter + 1,
        isTurnPlayer1: !state.isTurnPlayer1,
        boardState: payload,
      };
    case gameStatusConstants.MOVE_COUNTER_INCREMENT:
      return { ...state, moveCounter: state.moveCounter + 1 };
    case gameStatusConstants.GAME_FINISH:
      return { ...state, hasFinished: true };
    case gameStatusConstants.GAME_RESTART:
      return { ...initialState, boardState: genStateMatrix(payload) };
    case gameStatusConstants.WINNER_SET:
      return { ...state, hasFinished: true, winner: payload };
    default:
      return state;
  }
};
