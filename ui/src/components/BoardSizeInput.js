import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Log from 'helpers/Log';

const logger = new Log('BoardSizeInput');
const options = [
  { value: 3, label: '3 x 3' },
  { value: 4, label: '4 x 4' },
  { value: 5, label: '5 x 5' },
];

const BoardSizeInput = memo(({ onChange, value, ...rest }) => {
  const handleChange = option => {
    if (option && option.value) {
      onChange(option.value);
    }
  };
  return (
    <Select
      onChange={handleChange}
      value={options.filter(opt => opt.value === value)}
      options={options}
      {...rest}
    />
  );
});

BoardSizeInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired,
};

BoardSizeInput.defaultProps = {
  onChange: value => logger.info(value),
};

export default BoardSizeInput;
