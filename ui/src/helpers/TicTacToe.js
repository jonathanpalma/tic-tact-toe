class TicTacToe {
  constructor(board) {
    this.board = board;
    this.done = false;
  }

  hasWonVertical(x, state) {
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

  hasTied(moveCounter) {
    if (this.done) {
      return true;
    }
    if (moveCounter === this.board.size ** 2) {
      this.done = true;
    }
    return this.done;
  }
}

export default TicTacToe;
