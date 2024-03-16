import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { LoginForm } from '../../molecules';
import { TabButton } from '../../atoms';
import { APP_ROUTE, CITIES } from '../../../constants';

function LoginScreen(): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={<LoginForm />}
      rightSideButton={
        <TabButton
          tabName={CITIES.Amsterdam} isSelected={false}
          link={`${APP_ROUTE.Main}?city=${CITIES.Amsterdam}`}
        />
      }
    />
  );
}

export default LoginScreen;
