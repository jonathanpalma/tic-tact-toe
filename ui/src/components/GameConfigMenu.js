import React, { PureComponent } from 'react';

class GameConfigMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="game-config-menu">
        <input type="text" name="player1" />
        <br />
        <input type="text" name="player2" />
        <br />
        <input type="text" name="boardSize" />
        <br />
        <button type="button">Start</button>
      </div>
    );
  }
}

export default GameConfigMenu;
