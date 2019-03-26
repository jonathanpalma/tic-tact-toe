import { gameConfigConstants } from 'constants/actionTypes';
import isNumber from 'lodash/isNumber';

const initialState = {
  player1: undefined,
  player2: undefined,
  boardSize: 3,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case gameConfigConstants.PLAYER_1_CLEAR:
      return { ...state, player1: undefined };
    case gameConfigConstants.GAME_CONFIG_CLEAR:
      return { ...initialState };
    case gameConfigConstants.PLAYER_1_SET:
      return { ...state, player1: payload };
    case gameConfigConstants.PLAYER_2_CLEAR:
      return { ...state, player2: undefined };
    case gameConfigConstants.PLAYER_2_SET:
      return { ...state, player2: payload };
    case gameConfigConstants.BOARD_SIZE_SET:
      return isNumber(payload)
        ? { ...state, boardSize: Number(payload) }
        : state;
    default:
      return state;
  }
};
