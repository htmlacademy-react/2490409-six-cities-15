import { ReactElement } from 'react';
import { ErrorPage } from '../../templates';
import { StatusCodes } from 'http-status-codes';

function NotFoundPage(): ReactElement {
  return (
    <ErrorPage
      statusCode={StatusCodes.NOT_FOUND}
      errorDescription="This page does not exist"
      buttonText="Back to main page"
      testId="not-found-page"
    />
  );
}

export default NotFoundPage;
