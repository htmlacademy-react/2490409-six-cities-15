import {AUTH_STATUS} from '../constants';

type AuthStatusType = typeof AUTH_STATUS[keyof typeof AUTH_STATUS];

type AuthenticationForm = {
  login: string;
  password: string;
};

export type {
  AuthStatusType,
  AuthenticationForm,
};
