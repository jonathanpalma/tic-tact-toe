import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AsyncCreatableSelect from 'react-select/async-creatable';
import debounce from 'debounce-promise';
import Log from 'helpers/Log';
import userService from 'services/userService';
import Alert from 'react-bootstrap/Alert';

const logger = new Log('UserInput');

const UserInput = memo(
  ({ errorMsg, name, onChange, onClear, title, value, ...rest }) => {
    const getOptions = async input => {
      if (!input || input.length < 3) {
        return [];
      }
      try {
        const requestParams = { filter: input, limit: 10 };
        const usersRequest = await userService.getUsers(requestParams);
        const users = usersRequest.data;
        const options = users.map(user => ({ value: user.id, label: user.id }));
        return options;
      } catch (err) {
        logger.error(err);
        return [];
      }
    };
    const handleChange = async option => {
      if (option) {
        const { value: optionValue } = option;
        // eslint-disable-next-line no-underscore-dangle
        if (option.__isNew__) {
          const userRequest = await userService.postUsers(optionValue);
          if (userRequest.status === 201) {
            onChange(optionValue);
          }
        } else {
          onChange(optionValue);
        }
      } else {
        onClear();
      }
    };
    return (
      <div>
        <span>{title}</span>
        <AsyncCreatableSelect
          id={name}
          isClearable
          loadOptions={debounce(getOptions, 300)}
          name={`userInput-${name}`}
          onChange={debounce(handleChange, 300)}
          value={{ label: value, value }}
          {...rest}
        />
        {errorMsg && <Alert variant="danger">{`Error: ${errorMsg}`}</Alert>}
      </div>
    );
  }
);

UserInput.propTypes = {
  errorMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

UserInput.defaultProps = {
  errorMsg: undefined,
  onChange: value => logger.info(value),
  onClear: () => {},
  value: undefined,
};

export default UserInput;
