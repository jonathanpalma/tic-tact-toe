import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gameConfigActions from 'actions/gameConfigActions';
import {
  getBoardSize,
  getPlayer1,
  getPlayer2,
} from 'selectors/gameConfigSelectors';
import UserInput from './UserInput';

const GameConfigMenu = memo(
  ({
    boardSize,
    clearPlayer1,
    clearPlayer2,
    player1,
    player2,
    setBoardSize,
    setPlayer1,
    setPlayer2,
  }) => (
    <div id="game-config-menu">
      <UserInput
        name="player1"
        title="Player 1"
        value={player1}
        onClear={clearPlayer1}
        onChange={setPlayer1}
      />
      <br />
      <UserInput
        name="player2"
        title="Player 2"
        value={player2}
        onClear={clearPlayer2}
        onChange={setPlayer2}
      />
      <br />
      <input type="number" value={boardSize} disabled onChange={setBoardSize} />
      <br />
      <button type="button">Start</button>
    </div>
  )
);

GameConfigMenu.propTypes = {
  boardSize: PropTypes.number.isRequired,
  clearPlayer1: PropTypes.func.isRequired,
  clearPlayer2: PropTypes.func.isRequired,
  player1: PropTypes.string,
  player2: PropTypes.string,
  setBoardSize: PropTypes.func.isRequired,
  setPlayer1: PropTypes.func.isRequired,
  setPlayer2: PropTypes.func.isRequired,
};

GameConfigMenu.defaultProps = {
  player1: undefined,
  player2: undefined,
};

const mapStateToProps = state => ({
  boardSize: getBoardSize(state),
  player1: getPlayer1(state),
  player2: getPlayer2(state),
});

const mapDispatchToProps = dispatch => ({
  clearPlayer1: () => dispatch(gameConfigActions.clearPlayer1()),
  clearPlayer2: () => dispatch(gameConfigActions.clearPlayer2()),
  setBoardSize: size => dispatch(gameConfigActions.setBoardSize(size)),
  setPlayer1: id => dispatch(gameConfigActions.setPlayer1(id)),
  setPlayer2: id => dispatch(gameConfigActions.setPlayer2(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameConfigMenu);
