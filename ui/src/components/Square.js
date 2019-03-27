import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { StatesEnum } from 'constants/constants';
import getKeyByValue from 'helpers/getKeyByValue';

const Square = ({ onClick, position, value, ...rest }) => {
  const { x, y } = position;
  return (
    <Button type="button" variant="light" onClick={onClick} {...rest}>
      <span>
        {value === StatesEnum.BLANK ? '' : getKeyByValue(StatesEnum, value)}
        <span>{`(${x},${y})`}</span>
      </span>
    </Button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
};

export default Square;
