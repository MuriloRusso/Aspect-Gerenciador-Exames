// src/services/api.js
import axios from 'axios';

const localUrlApi = 'http://localhost/3000/';

const api = axios.create({
  baseURL: localUrlApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
