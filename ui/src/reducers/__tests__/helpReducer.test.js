import helpReducer, { initialState } from 'reducers/helpReducer';
import { helpConstants } from 'constants/actionTypes';

const { HELP_MODAL_SET } = helpConstants;

it("should create help's state", () => {
  const state = helpReducer(undefined, {});
  expect(state).toEqual(initialState);
});

it("should load help's state", () => {
  const state = helpReducer({ isModalOpen: true }, {});
  expect(state).toEqual({
    isModalOpen: true,
  });
});

it('should set modal flag', () => {
  const state = helpReducer(undefined, {
    type: HELP_MODAL_SET,
    payload: true,
  });
  expect(state).toEqual({ ...initialState, isModalOpen: true });
});
