import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { TabButton } from '../../atoms';
import { APP_ROUTE } from '../../../constants';
import './not-found.css';

type NotFoundPageProps = {
  type?: keyof typeof variant;
};

const variant = {
  offer: 'This offer isn\'t active or doesn\'t exist',
  page: 'This page does not exist',
};

function NotFoundPage({type = 'page'}: NotFoundPageProps): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={
        <div className="not-found__container">
          <div className="not-found__error-number">
            404
          </div>
          <br/>
          <div className="not-found__error-text">
            {variant[type]}
          </div>
        </div>
      }
      rightSideButton={<TabButton tabName={'Back to main page'} isSelected={false} link={APP_ROUTE.Main} />}
    />
  );
}

export default NotFoundPage;
