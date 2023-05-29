import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://covid19.devtest.ge/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
});

export default instance;
