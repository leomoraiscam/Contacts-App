import axios from 'axios';

const api = axios.create({
  baseURL:'https://5f074ac59c5c250016306ca1.mockapi.io/api/v1/'
});

export default api;
