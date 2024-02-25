import {AUTH_STATUS} from '../../constants';

const getAuthStatus = (): typeof AUTH_STATUS[keyof typeof AUTH_STATUS] => AUTH_STATUS.NoAuth;

export { getAuthStatus };
