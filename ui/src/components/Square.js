import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { StatesEnum, EmojisEnum } from 'constants/constants';

const Square = ({ onClick, value, ...rest }) => {
  return (
    <Button type="button" variant="light" onClick={onClick} {...rest}>
      <span>{value === StatesEnum.BLANK ? '' : EmojisEnum[value]}</span>
    </Button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Square;
