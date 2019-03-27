import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import GameConfigMenu from 'containers/GameConfigMenu';
import gameConfigActions from 'actions/gameConfigActions';
import { getIsModalOpen } from 'selectors/gameConfigSelectors';

const GameConfigModal = memo(({ closeModal, isOpen, openModal }) => (
  <Modal isOpen={isOpen} openBtnLabel="Open config" openModal={openModal}>
    <GameConfigMenu onStart={closeModal} />
  </Modal>
));

GameConfigModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: getIsModalOpen(state),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(gameConfigActions.setIsModalOpen(false)),
  openModal: () => dispatch(gameConfigActions.setIsModalOpen(true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameConfigModal);
