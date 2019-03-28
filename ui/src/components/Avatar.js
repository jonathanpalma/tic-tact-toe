import React from 'react';
import PropTypes from 'prop-types';
import { EmojisEnum } from 'constants/constants';
import Emoji from './Emoji';

const Avatar = ({ player }) => {
  const symbol = player === 1 ? EmojisEnum[1] : EmojisEnum[2];
  return (
    <span className="avatar">
      <Emoji symbol={symbol} />
    </span>
  );
};

Avatar.propTypes = {
  player: PropTypes.number.isRequired,
};

export default Avatar;
