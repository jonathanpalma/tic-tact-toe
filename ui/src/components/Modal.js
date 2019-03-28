import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal = memo(
  ({ children, openBtnLabel, openModal, closeModal, ...rest }) => (
    <Fragment>
      <button className="top-options" type="button" onClick={openModal}>
        {openBtnLabel}
      </button>
      <ReactModal ariaHideApp={false} style={customStyles} {...rest}>
        <Fragment>
          {children}
          {closeModal && (
            <button type="button" onClick={closeModal}>
              Close
            </button>
          )}
        </Fragment>
      </ReactModal>
    </Fragment>
  )
);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeModal: PropTypes.func,
  openBtnLabel: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  closeModal: undefined,
};

export default Modal;
