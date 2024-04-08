import { ReactElement } from 'react';
import { ErrorPage } from '../../templates';
import { StatusCodes } from 'http-status-codes';

function ServerErrorPage(): ReactElement {
  return (
    <ErrorPage
      statusCode={StatusCodes.INTERNAL_SERVER_ERROR}
      errorDescription="Something went wrong... Standby, we are working on it"
      buttonText="Try again"
      testId="server-error-page"
    />
  );
}

export default ServerErrorPage;
