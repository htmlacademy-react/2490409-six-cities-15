import { REQUEST_STATUS } from '../constants';

type RequestStatusType = typeof REQUEST_STATUS[keyof typeof REQUEST_STATUS];

export type {
  RequestStatusType,
};
