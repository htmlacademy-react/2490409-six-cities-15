import { Token } from '../services';

type HostUserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

type AuthenticatedUserType = HostUserType & {
  email: string;
  token: Token;
};

export type {
  HostUserType,
  AuthenticatedUserType,
};

