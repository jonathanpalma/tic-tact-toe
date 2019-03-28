export const squareSize = boardSize => (boardSize === 3 ? 150 : 100);
export const containerSize = boardSize => boardSize * squareSize(boardSize);
