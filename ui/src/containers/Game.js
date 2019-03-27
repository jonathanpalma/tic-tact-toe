import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerInfo from 'components/PlayerInfo';
import Score from 'components/Score';
import { getPlayer1Id, getPlayer2Id } from 'selectors/gameConfigSelectors';
import {
  getDrawScore,
  getPlayer1Score,
  getPlayer2Score,
} from 'selectors/scoreSelectors';
import Board from 'components/Board';

const Game = memo(({ draw, player1, player2 }) => (
  <div className="game-container">
    <Board />
    <div className="player-info-container">
      <PlayerInfo number={1} username={player1.id} />
      <PlayerInfo number={2} username={player2.id} />
    </div>
    <Score draw={draw.score} player1={player1.score} player2={player2.score} />
  </div>
));

Game.propTypes = {
  draw: PropTypes.shape({
    score: PropTypes.number.isRequired,
  }).isRequired,
  player1: PropTypes.shape({
    id: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  player2: PropTypes.shape({
    id: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  player1: {
    id: getPlayer1Id(state),
    score: getPlayer1Score(state),
  },
  player2: {
    id: getPlayer2Id(state),
    score: getPlayer2Score(state),
  },
  draw: {
    score: getDrawScore(state),
  },
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
