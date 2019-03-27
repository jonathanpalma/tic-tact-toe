import React, { memo } from 'react';
import PropTypes from 'prop-types';

const PlayerInfo = memo(({ number, username }) => (
  <div className="player-info-item">
    <p>
      {number === 1 ? 'X' : 'O'}
      <span>{username}</span>
    </p>
  </div>
));

PlayerInfo.propTypes = {
  number: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default PlayerInfo;
