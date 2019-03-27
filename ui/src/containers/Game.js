import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayer1Id, getPlayer2Id } from 'selectors/gameConfigSelectors';
import PlayerInfo from 'components/PlayerInfo';
import Score from 'components/Score';

const Game = memo(({ player1Id, player2Id }) => (
  <div className="game-container">
    <div className="player-info-container">
      <PlayerInfo number={1} username={player1Id} />
      <PlayerInfo number={2} username={player2Id} />
    </div>
    <Score />
  </div>
));

Game.propTypes = {
  player1Id: PropTypes.string.isRequired,
  player2Id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  player1Id: getPlayer1Id(state),
  player2Id: getPlayer2Id(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
