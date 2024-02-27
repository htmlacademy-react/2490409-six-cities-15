import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { TabButton } from '../../atoms';
import { APP_ROUTE } from '../../../constants';

function NotFound(): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{fontSize: 24, fontWeight: 500}}>
            404
          </div>
          <br/>
          <div style={{fontSize: 18}}>
            Not Found
          </div>
        </div>
      }
      rightSideButton={<TabButton tabName={'Back to main page'} isSelected={false} link={APP_ROUTE.Main} />}
    />
  );
}

export default NotFound;
