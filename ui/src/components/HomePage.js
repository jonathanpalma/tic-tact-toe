import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameConfigModal from 'containers/GameConfigModal';
import HelpModal from 'containers/HelpModal';
import Game from 'containers/Game';
import { getBoardSize } from 'selectors/gameConfigSelectors';
import { containerSize } from 'helpers/dynamicStyles';

const HomePage = ({ boardSize }) => (
  <div id="game-container" style={{ width: containerSize(boardSize) }}>
    <div className="d-flex bd-highlight">
      <div className="p-2 flex-fill bd-highlight">
        <GameConfigModal />
      </div>
      <div className="p-2 flex-fill bd-highlight">
        <HelpModal />
      </div>
    </div>
    <Game />
  </div>
);

HomePage.propTypes = {
  boardSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  boardSize: getBoardSize(state),
});

export default connect(mapStateToProps)(HomePage);
