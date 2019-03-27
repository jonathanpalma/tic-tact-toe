import scoreReducer, { initialState } from 'reducers/scoreReducer';
import { scoreConstants } from 'constants/actionTypes';

const {
  SCORE_DRAW_INCREMENT,
  SCORE_PLAYER_1_INCREMENT,
  SCORE_PLAYER_2_INCREMENT,
} = scoreConstants;

it("should create score's state", () => {
  const state = scoreReducer(undefined, {});
  expect(state).toEqual(initialState);
});

it("should load score's state", () => {
  const state = scoreReducer(
    {
      draw: 4,
      player1: 8,
      player2: 12,
    },
    {}
  );
  expect(state).toEqual({
    draw: 4,
    player1: 8,
    player2: 12,
  });
});

it('should increment draw score', () => {
  let state;
  state = scoreReducer(undefined, { type: SCORE_DRAW_INCREMENT });
  state = scoreReducer(state, { type: SCORE_DRAW_INCREMENT });
  state = scoreReducer(state, { type: SCORE_DRAW_INCREMENT });
  state = scoreReducer(state, { type: SCORE_DRAW_INCREMENT });
  state = scoreReducer(state, { type: SCORE_DRAW_INCREMENT });
  expect(state).toEqual({ ...initialState, draw: 5 });
});

it('should increment player 1 score', () => {
  let state;
  state = scoreReducer(
    {
      draw: 4,
      player1: 8,
      player2: 12,
    },
    { type: SCORE_PLAYER_1_INCREMENT }
  );
  state = scoreReducer(state, { type: SCORE_PLAYER_1_INCREMENT });
  state = scoreReducer(state, { type: SCORE_PLAYER_1_INCREMENT });
  expect(state).toEqual({ draw: 4, player1: 11, player2: 12 });
});

it('should increment player 2 score', () => {
  let state;
  state = scoreReducer(
    {
      draw: 4,
      player1: 11,
      player2: 12,
    },
    { type: SCORE_PLAYER_2_INCREMENT }
  );
  state = scoreReducer(state, { type: SCORE_PLAYER_2_INCREMENT });
  state = scoreReducer(state, { type: SCORE_PLAYER_2_INCREMENT });
  state = scoreReducer(state, { type: SCORE_PLAYER_2_INCREMENT });
  state = scoreReducer(state, { type: SCORE_PLAYER_2_INCREMENT });
  expect(state).toEqual({ draw: 4, player1: 11, player2: 17 });
});
