import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { TabButton } from '../../atoms';
import { APP_ROUTE } from '../../../constants';

type NotFoundPageProps = {
  type?: keyof typeof variant;
};

const variant = {
  offer: 'This offer isn\'t active or doesn\'t exist',
  page: 'This page does not exist',
};

function NotFound({type = 'page'}: NotFoundPageProps): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{fontSize: 24, fontWeight: 500}}>
            404
          </div>
          <br/>
          <div style={{fontSize: 18}}>
            {variant[type]}
          </div>
        </div>
      }
      rightSideButton={<TabButton tabName={'Back to main page'} isSelected={false} link={APP_ROUTE.Main} />}
    />
  );
}

export default NotFound;
