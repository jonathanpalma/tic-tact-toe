export const isValidGameConfig = (player1Id, player2Id, boardSize) =>
  Boolean(player1Id && player2Id && boardSize);

const validators = {
  isValidGameConfig,
};

export default validators;
