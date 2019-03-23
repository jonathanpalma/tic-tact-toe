import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from 'helpers/configureStore';

const store = configureStore();
const Root = ({ children }) => <Provider store={store}>{children}</Provider>;

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
