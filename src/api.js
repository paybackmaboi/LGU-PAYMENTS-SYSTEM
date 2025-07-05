import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Your backend server URL
});

// This will add the authentication token to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;