import React, { Fragment } from 'react';
import GameConfigModal from 'containers/GameConfigModal';
import HelpModal from 'containers/HelpModal';

const HomePage = () => (
  <Fragment>
    <GameConfigModal />
    <HelpModal />
  </Fragment>
);

export default HomePage;
