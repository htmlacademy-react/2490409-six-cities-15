import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { APP_ROUTE, BASE_URL } from '../constants';
import { getToken } from './token.ts';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from '../routing';

const PRECONFIGURED_ERRORS_MAPPING: Record<string, string> = {
  'ERR_NETWORK': 'Network error. Check your internet connection.',
  [String(StatusCodes.UNAUTHORIZED)]: 'You are not logged in. Click on \'Sign in\' button to log in.',
} as const;

const DISPLAY_ERROR_STATUS_CODE_MAPPING: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.FORBIDDEN]: true,
  [StatusCodes.CONFLICT]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
} as const;

const REDIRECT_STATUS_CODE_MAPPING: Record<number, string> = {
  [StatusCodes.NOT_FOUND]: APP_ROUTE.NotFound,
  [StatusCodes.BAD_GATEWAY]: APP_ROUTE.ServerError,
  [StatusCodes.SERVICE_UNAVAILABLE]: APP_ROUTE.ServerError,
} as const;

const shouldDisplayError = (response: AxiosResponse) => DISPLAY_ERROR_STATUS_CODE_MAPPING[response.status];
const getRedirectRoute = (response: AxiosResponse) => REDIRECT_STATUS_CODE_MAPPING[response.status];
const getPreconfiguredErrorMessage = (code: string) => PRECONFIGURED_ERRORS_MAPPING[code];

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

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        if (shouldDisplayError(error.response)) {
          const detailMessage = (error.response.data);

          toast.warn(detailMessage.message);
        }

        const redirectRoute = getRedirectRoute(error.response);
        if (redirectRoute) {
          redirect(redirectRoute);
        }

        const preconfiguredMessage = getPreconfiguredErrorMessage(String(error.response.status));
        if (preconfiguredMessage) {
          toast.warn(preconfiguredMessage);
        }
      }

      if (error.code) {
        const preconfiguredMessage = getPreconfiguredErrorMessage(error.code);
        if (preconfiguredMessage) {
          toast.warn(preconfiguredMessage);
        }
      }

      throw error;
    },
  );

  return api;
};

export default createAPI;
