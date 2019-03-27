import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoardSizeInput from 'components/BoardSizeInput';
import UserInput from 'components/UserInput';
import gameConfigActions from 'actions/gameConfigActions';
import { isValidGameConfig } from 'helpers/validators';
import {
  getBoardSize,
  getPlayer1ErrorMsg,
  getPlayer1Id,
  getPlayer2ErrorMsg,
  getPlayer2Id,
} from 'selectors/gameConfigSelectors';
import Button from 'react-bootstrap/Button';

const GameConfigMenu = memo(
  ({
    boardSize,
    clearGameConfig,
    clearPlayer1,
    clearPlayer2,
    onStart,
    player1ErrorMsg,
    player1Id,
    player2ErrorMsg,
    player2Id,
    setBoardSize,
    setPlayer1,
    setPlayer2,
  }) => {
    const isValidConfig = () =>
      isValidGameConfig(player1Id, player2Id, boardSize);
    const handleStart = () => {
      if (isValidConfig()) {
        onStart();
      }
    };
    return (
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
        <BoardSizeInput onChange={setBoardSize} value={boardSize} />
        <br />
        <Button type="button" disabled={!isValidConfig()} onClick={handleStart}>
          Start
        </Button>
        <Button type="button" variant="light" onClick={clearGameConfig}>
          Clear
        </Button>
      </div>
    );
  }
);

GameConfigMenu.propTypes = {
  boardSize: PropTypes.number.isRequired,
  clearGameConfig: PropTypes.func.isRequired,
  clearPlayer1: PropTypes.func.isRequired,
  clearPlayer2: PropTypes.func.isRequired,
  onStart: PropTypes.func,
  player1ErrorMsg: PropTypes.string,
  player1Id: PropTypes.string,
  player2ErrorMsg: PropTypes.string,
  player2Id: PropTypes.string,
  setBoardSize: PropTypes.func.isRequired,
  setPlayer1: PropTypes.func.isRequired,
  setPlayer2: PropTypes.func.isRequired,
};

GameConfigMenu.defaultProps = {
  onStart: () => {},
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
  clearGameConfig: () => dispatch(gameConfigActions.clearGameConfig()),
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
