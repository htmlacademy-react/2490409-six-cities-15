import { AuthenticatedUserType, AuthStatusType } from '../../types';
import { makeFakeHostUser } from '.';
import { datatype, helpers, internet } from 'faker';
import { UserStateType } from '../../store/slices/user';
import { AUTH_STATUS } from '../../constants';
import { Token } from '../../services';

const makeFakeToken = () => datatype.string(15);

const makeFakeAuthenticatedUser = (token?: Token): AuthenticatedUserType => {
  const hostUser = makeFakeHostUser();

  return {
    ...hostUser,
    email: internet.email(),
    token: token ?? makeFakeToken(),
  };
};

type FakeUserStateProps = {
  shouldCreateUser?: boolean;
  authorizationStatus?: AuthStatusType;
};

const makeFakeAuthenticationForm = () => ({
  login: internet.email(),
  password: `${datatype.string(8)}${datatype.number(100)}`,
});

const makeFakeUserState = ({shouldCreateUser = false, authorizationStatus = AUTH_STATUS.Unknown}: FakeUserStateProps): UserStateType => ({
  user: shouldCreateUser ? makeFakeAuthenticatedUser() : null,
  authorizationStatus,
});

const makeRandomAuthStatus = (exclude?: AuthStatusType[]) => {
  const availableStatuses = Object.values(AUTH_STATUS);
  if (!exclude) {
    return helpers.randomize(availableStatuses);
  }

  exclude.forEach((status) => {
    const i = availableStatuses.indexOf(status);
    if (i) {
      availableStatuses.splice(i, 1);
    }
  });

  return helpers.randomize(availableStatuses);
};

export {
  makeFakeToken,
  makeFakeAuthenticatedUser,
  makeFakeUserState,
  makeFakeAuthenticationForm,
  makeRandomAuthStatus,
};

