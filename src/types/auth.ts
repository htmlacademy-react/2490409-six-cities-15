import { AuthStatus } from '../constants';

type AuthStatusType = typeof AuthStatus[keyof typeof AuthStatus];

type AuthenticationForm = {
  login: string;
  password: string;
};

export type {
  AuthStatusType,
  AuthenticationForm,
};
