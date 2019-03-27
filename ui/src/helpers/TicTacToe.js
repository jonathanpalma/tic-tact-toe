import Log from './Log';

const logger = new Log('TicTacToe');

class TicTacToe {
  constructor(board) {
    this.board = board;
    this.done = false;
  }

  hasYouWon(x, y, state) {
    return (
      this.hasWonVertical(x, state) ||
      this.hasWonHorizontal(y, state) ||
      this.hasWonDiagonal(x, y, state) ||
      this.hasWonDiagonalInverted(x, y, state)
    );
  }

  hasWonVertical(x, state) {
    logger.info(`hasWonVertical(${x}, ${state}) - done(${this.done})`);
    if (this.done) {
      return true;
    }
    const { state: boardState, size } = this.board;
    for (let i = 0; i < size; i += 1) {
      if (boardState[x][i] !== state) break;
      if (i === size - 1) {
        this.done = true;
      }
    }
    return this.done;
  }

  hasWonHorizontal(y, state) {
    logger.info(`hasWonHorizontal(${y}, ${state}) - done(${this.done})`);
    if (this.done) {
      return true;
    }
    const { state: boardState, size } = this.board;
    for (let i = 0; i < size; i += 1) {
      if (boardState[i][y] !== state) break;
      if (i === size - 1) {
        this.done = true;
      }
    }
    return this.done;
  }

  hasWonDiagonal(x, y, state) {
    logger.info(`hasWonDiagonal(${x}, ${y}, ${state}) - done(${this.done})`);
    if (this.done) {
      return true;
    }
    const { state: boardState, size } = this.board;
    if (x === y) {
      for (let i = 0; i < size; i += 1) {
        if (boardState[i][i] !== state) break;
        if (i === size - 1) {
          this.done = true;
        }
      }
    }
    return this.done;
  }

  hasWonDiagonalInverted(x, y, state) {
    logger.info(
      `hasWonDiagonalInverted(${x}, ${y}, ${state}) - done(${this.done})`
    );
    if (this.done) {
      return true;
    }
    const { state: boardState, size } = this.board;
    if (x + y === size - 1) {
      for (let i = 0; i < size; i += 1) {
        if (boardState[i][size - 1 - i] !== state) break;
        if (i === size - 1) {
          this.done = true;
        }
      }
    }
    return this.done;
  }

  hasYouTied(moveCounter) {
    logger.info(
      `hasYouTied(${moveCounter}) - totalBoardMoves(${this.board.size ** 2})`
    );
    if (moveCounter === this.board.size ** 2 && !this.done) {
      return true;
    }
    return false;
  }
}

export default TicTacToe;
