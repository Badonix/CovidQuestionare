import axios from './axios';

export const getRegisterRequest = (data) => {
  return axios.post('/create', data);
};
