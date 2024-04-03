import { ReactElement } from 'react';
import { ErrorPage } from '../../templates';
import { StatusCodes } from 'http-status-codes';

function NotFoundPage(): ReactElement {
  return (
    <ErrorPage
      statusCode={StatusCodes.INTERNAL_SERVER_ERROR}
      errorDescription="Something went wrong... Standby, we are working on it"
      buttonText="Try again"
    />
  );
}

export default NotFoundPage;
