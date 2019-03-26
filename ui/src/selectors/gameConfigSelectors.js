export const getBoardSize = state => state.gameConfig.boardSize;
export const getPlayer1Id = state => state.gameConfig.player1.id;
export const getPlayer1ErrorMsg = state => state.gameConfig.player1.errorMsg;
export const getPlayer1HasErrored = state =>
  Boolean(state.gameConfig.player1.errorMsg);
export const getPlayer2Id = state => state.gameConfig.player2.id;
export const getPlayer2ErrorMsg = state => state.gameConfig.player2.errorMsg;
export const getPlayer2HasErrored = state =>
  Boolean(state.gameConfig.player2.errorMsg);
