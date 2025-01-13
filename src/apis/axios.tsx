import axios from 'axios';
import { getAccessToken } from '../util/localStorageUtils';
import { showError } from '../util/ErrorToastifyRender';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error.response?.status);
    if (error.response?.status === 401) {
      showError('Unauthorized! Token may be invalid or expired.');
      console.error('Unauthorized! Token may be invalid or expired.');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
      if (window.location.pathname !== '/login') {
        // window.location.href = '/login';
      }
    } else if (error.response?.status === 404) {
      window.location.href = '/not-found';
    } else if (error.response?.status === 500) {
      window.location.href = '/server-error';
    } else {
      showError(error.response?.data.errors);
    }
    return Promise.reject(error);
  },
);

export default instance;
