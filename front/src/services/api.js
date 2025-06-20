// src/services/api.js
import axios from 'axios';

const localUrlApi = 'http://localhost:3000/';
const VarcelUrlApi = 'https://aspect-gerenciador-exames-api2.vercel.app/';


const api = axios.create({
  // baseURL: localUrlApi,
  baseURL: VarcelUrlApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
