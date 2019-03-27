import { helpConstants } from 'constants/actionTypes';

const setIsModalOpen = bool => ({
  type: helpConstants.HELP_MODAL_SET,
  payload: bool,
});

const helpActions = {
  setIsModalOpen,
};

export default helpActions;
