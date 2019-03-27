import { helpConstants } from 'constants/actionTypes';

export const initialState = {
  isModalOpen: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case helpConstants.HELP_MODAL_SET:
      return { ...state, isModalOpen: payload };
    default:
      return state;
  }
};
