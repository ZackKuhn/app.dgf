import axios from 'axios';

const api = axios.create({
  // baseURL: "http://18.230.11.226:7743/"
  baseURL: "http://localhost:3333/"
});

export default api;