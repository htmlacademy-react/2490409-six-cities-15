const AUTH_TOKEN_NAME = 'six-cities-token';

type Token = string;

const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_NAME) ?? '';

const saveToken = (token: Token): void => localStorage.setItem(AUTH_TOKEN_NAME, token);

const dropToken = (): void => localStorage.removeItem(AUTH_TOKEN_NAME);

export {
  getToken,
  saveToken,
  dropToken,
};
export type { Token };
