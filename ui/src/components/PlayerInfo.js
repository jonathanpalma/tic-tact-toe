import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const PlayerInfo = memo(({ number, username }) => (
  <div className="player-info-item">
    <p>
      <span>{username}</span>
      <Avatar player={number} />
    </p>
  </div>
));

PlayerInfo.propTypes = {
  number: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default PlayerInfo;
