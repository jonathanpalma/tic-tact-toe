/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Score from 'components/Score';
import {
  getPlayer1Id,
  getPlayer2Id,
  getBoardSize,
} from 'selectors/gameConfigSelectors';
import {
  getDrawScore,
  getPlayer1Score,
  getPlayer2Score,
} from 'selectors/scoreSelectors';
import Board from 'containers/Board';
import gameStatusActions from 'actions/gameStatusActions';
import { getHasFinished, getWinner } from 'selectors/gameStatusSelectors';
import Avatar from 'components/Avatar';
import { containerSize } from 'helpers/dynamicStyles';

const Game = ({
  boardSize,
  draw,
  player1,
  player2,
  hasFinished,
  restartGame,
  winner,
}) => (
  <div className="board-container">
    {!hasFinished ? (
      <Board />
    ) : winner ? (
      <div
        className="game-message"
        style={{ height: containerSize(boardSize) }}
      >
        <Avatar player={winner} />
        Player {winner} has won
      </div>
    ) : (
      <div
        className="game-message"
        style={{ height: containerSize(boardSize) }}
      >
        Draw
      </div>
    )}
    <button
      className="restart-button"
      type="button"
      variant="light"
      onClick={restartGame}
    >
      Restart
    </button>
    <Score draw={draw.score} player1={player1} player2={player2} />
  </div>
);

Game.propTypes = {
  boardSize: PropTypes.number.isRequired,
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
  boardSize: getBoardSize(state),
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
