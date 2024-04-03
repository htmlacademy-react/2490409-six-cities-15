import { ReactElement } from 'react';
import { ContentOnTheLeft } from '../../templates';
import { TabButton } from '../../atoms';
import { APP_ROUTE } from '../../../constants';
import { StatusCodes } from 'http-status-codes';
import './error-page.css';

type ErrorPageProps = {
  statusCode: typeof StatusCodes[keyof typeof StatusCodes];
  errorDescription: string;
  buttonText: string;
};

function ErrorPage({statusCode, errorDescription, buttonText}: ErrorPageProps): ReactElement {
  return (
    <ContentOnTheLeft
      showAccountData
      rightSideButton={<TabButton tabName={buttonText} isSelected={false} link={APP_ROUTE.Main}/>}
    >
      <div className="not-found__container">
        <div className="not-found__error-number">
          {statusCode}
        </div>
        <br/>
        <div className="not-found__error-text">
          {errorDescription}
        </div>
      </div>
    </ContentOnTheLeft>
  );
}

export default ErrorPage;
