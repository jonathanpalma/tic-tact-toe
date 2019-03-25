import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';
import debounce from 'debounce-promise';
import Log from 'helpers/Log';
import userService from 'services/userService';

const logger = new Log('UserInput');

const UserInput = memo(({ name, errorMsg, onChange, title }) => {
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
  return (
    <div>
      <span>{title}</span>
      <AsyncSelect
        id={name}
        name={`userInput-${name}`}
        loadOptions={debounce(getOptions, 300)}
        onChange={onChange}
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
  onChange: PropTypes.func,
  title: PropTypes.string.isRequired,
};

UserInput.defaultProps = {
  errorMsg: undefined,
  onChange: value => logger.info(value),
};

export default UserInput;
