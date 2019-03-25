const development = require('./development');
const production = require('./production');

const commons = {
  api: {
    baseUrl: process.env.REACT_APP_BFF_URL,
    getUsers: {
      endpoint: '/users',
      // username: 'blablabla',
      // password: 'bl4bl4bl4',
    },
    getUsersById: {
      endpoint: '/users/:userId',
    },
    postUsers: {
      endpoint: '/users',
    },
  },
};

const config =
  // eslint-disable-next-line prettier/prettier
  process.env.NODE_ENV !== 'production'
    ? development(commons)
    : production(commons);

module.exports = Object.freeze(Object.assign({}, config));
