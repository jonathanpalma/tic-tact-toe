/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from 'components/PlayerInfo';

const Score = memo(({ player1, player2, draw }) => (
  <div className="container">
    <h2 className="text-center">Score</h2>
    <div className="row">
      <div className="col text-center">
        <span>{player1.score}</span>
        <PlayerInfo number={1} username={player1.id} />
      </div>
      <div className="col text-center">
        <span>{draw}</span>
        <p>Draw</p>
      </div>
      <div className="col text-center">
        <span>{player2.score}</span>
        <PlayerInfo number={2} username={player2.id} />
      </div>
    </div>
  </div>
));

Score.propTypes = {
  draw: PropTypes.number.isRequired,
  player1: PropTypes.shape({
    id: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  player2: PropTypes.shape({
    id: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Score;
