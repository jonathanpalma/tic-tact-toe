import { gameStatusConstants } from 'constants/actionTypes';

export const initialState = {
  isTurnPlayer1: true,
  hasFinished: false,
  winner: undefined,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case gameStatusConstants.TURN_NEXT:
      return { ...state, isTurnPlayer1: state.isTurnPlayer1 };
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
