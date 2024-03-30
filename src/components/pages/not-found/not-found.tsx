import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { TabButton } from '../../atoms';
import { APP_ROUTE } from '../../../constants';
import { StatusCodes } from 'http-status-codes';
import './not-found.css';

type NotFoundPageProps = {
  type?: keyof typeof variant;
};

const variant = {
  serverError: 'Something went wrong... Standby, we are working on it',
  notFound: 'This page does not exist',
};

function ErrorPage({type = 'notFound'}: NotFoundPageProps): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={
        <div className="not-found__container">
          <div className="not-found__error-number">
            {type === 'notFound' ? StatusCodes.NOT_FOUND : StatusCodes.INTERNAL_SERVER_ERROR}
          </div>
          <br/>
          <div className="not-found__error-text">
            {variant[type]}
          </div>
        </div>
      }
      rightSideButton={<TabButton tabName={type === 'notFound' ? 'Back to main page' : 'Try again'} isSelected={false} link={APP_ROUTE.Main} />}
    />
  );
}

export default ErrorPage;
