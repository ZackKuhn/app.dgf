import axios from 'axios';

const api = axios.create({
  baseURL: "http://18.230.11.226:7743"
});

export default api;