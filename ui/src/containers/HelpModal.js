import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import Instruction from 'containers/Instruction';
import helpActions from 'actions/helpActions';
import { getIsModalOpen } from 'selectors/helpSelectors';

const HelpModal = memo(({ closeModal, isOpen, openModal, ...rest }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    openBtnLabel="Open help"
    openModal={openModal}
    {...rest}
  >
    <Instruction />
  </Modal>
));

HelpModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsModalOpen(state),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(helpActions.setIsModalOpen(false)),
  openModal: () => dispatch(helpActions.setIsModalOpen(true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpModal);
