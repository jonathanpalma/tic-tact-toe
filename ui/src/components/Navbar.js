import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import RBNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbar = ({ location: { pathname } }) => (
  <RBNavbar>
    <Nav className="mr-auto">
      <Link className={`nav-link${pathname === '/' ? ' active' : ''}`} to="/">
        Home
      </Link>
      <Link
        className={`nav-link${pathname === '/ranking' ? ' active' : ''}`}
        to="/ranking"
      >
        Ranking
      </Link>
    </Nav>
  </RBNavbar>
);

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <Navbar {...props} />);
