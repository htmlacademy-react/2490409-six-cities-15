import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants';
import { getToken } from './token.ts';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};

export default createAPI();
