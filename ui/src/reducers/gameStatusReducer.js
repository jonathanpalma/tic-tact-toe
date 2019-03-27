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
        isTurnPlayer1: !state.isTurnPlayer1,
        moveCounter: state.moveCounter + 1,
        boardState: payload,
      };
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
