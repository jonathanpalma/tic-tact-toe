import { gameConfigConstants, scoreConstants } from 'constants/actionTypes';

export const initialState = {
  draw: 0,
  player1: 0,
  player2: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case gameConfigConstants.BOARD_SIZE_SET:
    case gameConfigConstants.GAME_CONFIG_CLEAR:
    case gameConfigConstants.PLAYER_1_CLEAR:
    case gameConfigConstants.PLAYER_1_ERROR:
    case gameConfigConstants.PLAYER_1_SET:
    case gameConfigConstants.PLAYER_2_CLEAR:
    case gameConfigConstants.PLAYER_2_ERROR:
    case gameConfigConstants.PLAYER_2_SET:
      return { ...initialState };
    case scoreConstants.SCORE_DRAW_INCREMENT:
      return { ...state, draw: state.draw + 1 };
    case scoreConstants.SCORE_PLAYER_1_INCREMENT:
      return { ...state, player1: state.player1 + 1 };
    case scoreConstants.SCORE_PLAYER_2_INCREMENT:
      return { ...state, player2: state.player2 + 1 };
    default:
      return state;
  }
};
