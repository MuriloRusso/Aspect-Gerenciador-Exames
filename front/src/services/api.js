// src/services/api.js
import axios from 'axios';

// const UrlAPI = 'http://localhost:3000/';
const UrlAPI = 'https://aspect-gerenciador-exames-api2.vercel.app/';

const api = axios.create({
  baseURL: UrlAPI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
