import React, { PureComponent } from 'react';
import UserInput from './UserInput';

class GameConfigMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="game-config-menu">
        <UserInput name="player1" title="Player 1" />
        <br />
        <UserInput name="player2" title="Player 2" />
        <br />
        <button type="button">Start</button>
      </div>
    );
  }
}

export default GameConfigMenu;
