import { AuthenticatedUserType, AuthStatusType } from '../../types';
import { makeFakeHostUser } from '.';
import { datatype, internet } from 'faker';
import { UserStateType } from '../../store/slices/user';
import { AUTH_STATUS } from '../../constants';

const makeFakeAuthenticatedUser = (): AuthenticatedUserType => {
  const hostUser = makeFakeHostUser();

  return {
    ...hostUser,
    email: internet.email(),
    token: datatype.string(15),
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

export {
  makeFakeAuthenticatedUser,
  makeFakeUserState,
  makeFakeAuthenticationForm,
};

