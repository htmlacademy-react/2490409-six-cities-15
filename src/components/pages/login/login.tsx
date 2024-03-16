import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { LoginForm } from '../../molecules';
import { TabButton } from '../../atoms';
import { CITIES } from '../../../constants';
import { createMainRouteWithCity } from '../../../utils';

function LoginPage(): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={<LoginForm />}
      rightSideButton={
        <TabButton
          tabName={CITIES.Amsterdam} isSelected={false}
          link={createMainRouteWithCity(CITIES.Amsterdam)}
        />
      }
    />
  );
}

export default LoginPage;
