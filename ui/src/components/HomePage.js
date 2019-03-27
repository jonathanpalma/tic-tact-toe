import React, { Fragment } from 'react';
import GameConfigModal from 'containers/GameConfigModal';
import HelpModal from 'containers/HelpModal';
import Game from 'containers/Game';

const HomePage = () => (
  <Fragment>
    <GameConfigModal />
    <HelpModal />
    <Game />
  </Fragment>
);

export default HomePage;
