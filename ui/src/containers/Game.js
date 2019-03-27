/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
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
import Board from 'containers/Board';
import Button from 'react-bootstrap/Button';
import gameStatusActions from 'actions/gameStatusActions';
import { getHasFinished, getWinner } from 'selectors/gameStatusSelectors';

const Game = ({ draw, player1, player2, hasFinished, restartGame, winner }) => (
  <div className="game-container">
    {!hasFinished ? (
      <Board />
    ) : winner ? (
      <div>Player {winner} has won</div>
    ) : (
      <div>draw</div>
    )}
    <Button type="button" variant="light" onClick={restartGame}>
      Restart
    </Button>
    <div className="player-info-container">
      <PlayerInfo number={1} username={player1.id} />
      <PlayerInfo number={2} username={player2.id} />
    </div>
    <Score draw={draw.score} player1={player1.score} player2={player2.score} />
  </div>
);

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
  hasFinished: PropTypes.bool.isRequired,
  restartGame: PropTypes.func.isRequired,
  winner: PropTypes.string,
};

Game.defaultProps = {
  winner: undefined,
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
  hasFinished: getHasFinished(state),
  winner: getWinner(state),
});

const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(gameStatusActions.restartGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
