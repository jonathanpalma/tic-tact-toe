import { StatesEnum } from 'constants/constants';

const genStateMatrix = n =>
  Array(n)
    .fill(StatesEnum.BLANK)
    .map(() => Array(n).fill(StatesEnum.BLANK));

export default genStateMatrix;
