import { scoreConstants } from 'constants/actionTypes';

const incrementDrawScore = () => ({
  type: scoreConstants.SCORE_DRAW_INCREMENT,
});
const incrementPlayer1Score = () => ({
  type: scoreConstants.SCORE_PLAYER_1_INCREMENT,
});
const incrementPlayer2Score = () => ({
  type: scoreConstants.SCORE_PLAYER_2_INCREMENT,
});

const scoreActions = {
  incrementDrawScore,
  incrementPlayer1Score,
  incrementPlayer2Score,
};

export default scoreActions;
