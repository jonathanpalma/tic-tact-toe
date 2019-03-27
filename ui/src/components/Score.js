/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Score = memo(({ player1, player2, draw }) => (
  <div className="score-container">
    <h2>Score</h2>
    <div>
      <p className="score-item">
        Player 1 <span>{player1}</span>
      </p>
      <p className="score-item">
        Draw <span>{draw}</span>
      </p>
      <p className="score-item">
        Player 2 <span>{player2}</span>
      </p>
    </div>
  </div>
));

Score.propTypes = {
  draw: PropTypes.number.isRequired,
  player1: PropTypes.number.isRequired,
  player2: PropTypes.number.isRequired,
};

export default Score;
