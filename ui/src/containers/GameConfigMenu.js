import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInput from 'components/UserInput';
import gameConfigActions from 'actions/gameConfigActions';
import {
  getBoardSize,
  getPlayer1ErrorMsg,
  getPlayer1Id,
  getPlayer2ErrorMsg,
  getPlayer2Id,
} from 'selectors/gameConfigSelectors';

const GameConfigMenu = memo(
  ({
    boardSize,
    clearPlayer1,
    clearPlayer2,
    player1ErrorMsg,
    player1Id,
    player2ErrorMsg,
    player2Id,
    setBoardSize,
    setPlayer1,
    setPlayer2,
  }) => (
    <div id="game-config-menu">
      <UserInput
        errorMsg={player1ErrorMsg}
        name="player1"
        onChange={setPlayer1}
        onClear={clearPlayer1}
        title="Player 1"
        value={player1Id}
      />
      <br />
      <UserInput
        errorMsg={player2ErrorMsg}
        name="player2"
        onChange={setPlayer2}
        onClear={clearPlayer2}
        title="Player 2"
        value={player2Id}
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
  player1ErrorMsg: PropTypes.string,
  player1Id: PropTypes.string,
  player2ErrorMsg: PropTypes.string,
  player2Id: PropTypes.string,
  setBoardSize: PropTypes.func.isRequired,
  setPlayer1: PropTypes.func.isRequired,
  setPlayer2: PropTypes.func.isRequired,
};

GameConfigMenu.defaultProps = {
  player1ErrorMsg: undefined,
  player1Id: undefined,
  player2ErrorMsg: undefined,
  player2Id: undefined,
};

const mapStateToProps = state => ({
  boardSize: getBoardSize(state),
  player1ErrorMsg: getPlayer1ErrorMsg(state),
  player1Id: getPlayer1Id(state),
  player2ErrorMsg: getPlayer2ErrorMsg(state),
  player2Id: getPlayer2Id(state),
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
