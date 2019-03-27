import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';

const App = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
