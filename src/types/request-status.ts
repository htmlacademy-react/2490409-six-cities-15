import { RequestStatus } from '../constants';

type RequestStatusType = typeof RequestStatus[keyof typeof RequestStatus];

export type {
  RequestStatusType,
};
