import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import debounce from 'debounce-promise';
import Log from 'helpers/Log';
import userService from 'services/userService';

const logger = new Log('UserInput');

const UserInput = memo(({ name, errorMsg, onChange, onClear, title }) => {
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
      const { value } = option;
      // eslint-disable-next-line no-underscore-dangle
      if (option && option.__isNew__) {
        const userRequest = await userService.postUsers(option.value);
        if (userRequest.status === 201) {
          onChange(value);
        }
      } else {
        onChange(value);
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
        name={`userInput-${name}`}
        loadOptions={debounce(getOptions, 300)}
        onChange={debounce(handleChange, 300)}
        isClearable
      />
      {errorMsg && (
        <div className="alert alert-danger">{`Error: ${errorMsg}`}</div>
      )}
    </div>
  );
});

UserInput.propTypes = {
  errorMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  title: PropTypes.string.isRequired,
};

UserInput.defaultProps = {
  errorMsg: undefined,
  onClear: () => {},
  onChange: value => logger.info(value),
};

export default UserInput;
