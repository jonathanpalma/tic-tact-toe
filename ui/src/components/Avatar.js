import React from 'react';
import PropTypes from 'prop-types';
import { EmojisEnum } from 'constants/constants';

const Avatar = ({ player }) => (
  <span className="avatar">{player === 1 ? EmojisEnum[1] : EmojisEnum[2]}</span>
);

Avatar.propTypes = {
  player: PropTypes.number.isRequired,
};

export default Avatar;
