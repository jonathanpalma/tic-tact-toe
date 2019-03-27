/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gameStatusActions from 'actions/gameStatusActions';
import { getBoardSize } from 'selectors/gameConfigSelectors';
import { getBoardState } from 'selectors/gameStatusSelectors';
import Square from 'components/Square';
import { StatesEnum } from 'constants/constants';

class Board extends PureComponent {
  render() {
    const {
      board: { state: boardState },
      moveGame,
    } = this.props;
    return boardState.map((row, x) => (
      <div key={x}>
        {row.map((squareState, y) => (
          <Square
            key={`${x}-${y}`}
            onClick={() => moveGame({ x, y })}
            position={{ x, y }}
            disabled={squareState !== StatesEnum.BLANK}
            value={squareState}
          />
        ))}
      </div>
    ));
  }
}

Board.propTypes = {
  board: PropTypes.shape({
    size: PropTypes.number.isRequired,
    state: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    ).isRequired,
  }).isRequired,
  moveGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  board: {
    size: getBoardSize(state),
    state: getBoardState(state),
  },
});

const mapDispatchToProps = dispatch => ({
  moveGame: position => dispatch(gameStatusActions.moveGame(position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
