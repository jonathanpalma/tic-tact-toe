import gameConfigReducer, { initialState } from 'reducers/gameConfigReducer';
import { gameConfigConstants } from 'constants/actionTypes';

const {
  BOARD_SIZE_SET,
  GAME_CONFIG_MODAL_SET,
  PLAYER_1_SET,
  PLAYER_2_SET,
} = gameConfigConstants;

it("should create gameConfig's state", () => {
  const state = gameConfigReducer(undefined, {});
  expect(state).toEqual(initialState);
});

it("should load gameConfig's state", () => {
  const state = gameConfigReducer(
    {
      player1: { id: 'johnniewalker' },
      player2: { id: 'josecuervo' },
      boardSize: 3,
      isModalOpen: false,
    },
    {}
  );
  expect(state).toEqual({
    player1: { id: 'johnniewalker' },
    player2: { id: 'josecuervo' },
    boardSize: 3,
    isModalOpen: false,
  });
});

it('should set player 1', () => {
  const state = gameConfigReducer(
    {
      player1: { id: 'johnniewalker' },
      player2: { id: 'josecuervo' },
      boardSize: 3,
      isModalOpen: false,
    },
    { type: PLAYER_1_SET, payload: 'juanperez' }
  );
  expect(state).toEqual({
    player1: { id: 'juanperez' },
    player2: { id: 'josecuervo' },
    boardSize: 3,
    isModalOpen: false,
  });
});

it('should set player 2', () => {
  const state = gameConfigReducer(undefined, {
    type: PLAYER_2_SET,
    payload: 'jackdaniels',
  });
  expect(state).toEqual({ ...initialState, player2: { id: 'jackdaniels' } });
});

it('should set board size', () => {
  const state = gameConfigReducer(undefined, {
    type: BOARD_SIZE_SET,
    payload: 20,
  });
  expect(state).toEqual({ ...initialState, boardSize: 20 });
});

it('should set modal flag', () => {
  const state = gameConfigReducer(undefined, {
    type: GAME_CONFIG_MODAL_SET,
    payload: false,
  });
  expect(state).toEqual({ ...initialState, isModalOpen: false });
});
