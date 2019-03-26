import { gameConfigConstants } from 'constants/actionTypes';
import isNumber from 'lodash/isNumber';

const initialPlayerState = {
  id: undefined,
  errorMsg: undefined,
};

const initialState = {
  player1: initialPlayerState,
  player2: initialPlayerState,
  boardSize: 3,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case gameConfigConstants.BOARD_SIZE_SET:
      return isNumber(payload)
        ? { ...state, boardSize: Number(payload) }
        : state;
    case gameConfigConstants.GAME_CONFIG_CLEAR:
      return { ...initialState };
    case gameConfigConstants.PLAYER_1_CLEAR:
      return { ...state, player1: initialPlayerState };
    case gameConfigConstants.PLAYER_1_ERROR:
      return { ...state, player1: { id: undefined, errorMsg: payload } };
    case gameConfigConstants.PLAYER_1_SET:
      return { ...state, player1: { id: payload, errorMsg: undefined } };
    case gameConfigConstants.PLAYER_2_ERROR:
      return { ...state, player2: { id: undefined, errorMsg: payload } };
    case gameConfigConstants.PLAYER_2_CLEAR:
      return { ...state, player2: initialPlayerState };
    case gameConfigConstants.PLAYER_2_SET:
      return { ...state, player2: { id: payload, errorMsg: undefined } };
    default:
      return state;
  }
};
