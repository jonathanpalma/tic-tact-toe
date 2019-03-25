import axios from 'axios';
import stringifyRequestParams from 'helpers/stringifyRequestParams';
import config from '../config';

const getUsers = async (requestParams = {}) => {
  const {
    baseUrl,
    getUsers: { endpoint },
  } = config.api;
  const expectedParams = ['limit', 'filter'];
  const params = stringifyRequestParams(requestParams, expectedParams);
  const url = `${baseUrl}${endpoint}${params}`;
  const response = await axios.get(url);
  return response;
};

const getUserById = async id => {
  const {
    baseUrl,
    getUsersById: { endpoint },
  } = config.api;
  const endpointWithPathVars = endpoint.replace(':userId', id);
  const url = `${baseUrl}${endpointWithPathVars}`;
  const response = await axios.get(url);
  return response;
};

const postUsers = async id => {
  const {
    baseUrl,
    postUsers: { endpoint },
  } = config.api;
  const url = `${baseUrl}${endpoint}`;
  const response = await axios.post(url, { id });
  return response;
};

const userService = {
  getUsers,
  getUserById,
  postUsers,
};

export default userService;
