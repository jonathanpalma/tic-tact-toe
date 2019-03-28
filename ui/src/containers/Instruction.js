/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBoardSize } from 'selectors/gameConfigSelectors';

const Instruction = memo(({ boardSize }) => (
  <div>
    <p>How to play</p>
    <ol>
      <li>
        The game is played on a grid that is {boardSize} squares by {boardSize}{' '}
        squares.
      </li>
      <li>
        Player 1 is X, Player 2 is O. Players take turns putting their marks in
        empty squares.
      </li>
      <li>
        The first player to get {boardSize} of her marks in a row (up, down,
        across, or diagonally) is the winner.
      </li>
      <li>
        When all {boardSize * boardSize} squares are full, the game is over. If
        no player has {boardSize} marks in a row, the game ends in a tie.
      </li>
    </ol>
  </div>
));

Instruction.propTypes = {
  boardSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  boardSize: getBoardSize(state),
});

export default connect(mapStateToProps)(Instruction);
