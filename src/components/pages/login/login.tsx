import { ReactElement } from 'react';
import { ContentOnTheRight } from '../../templates';
import { LoginForm } from '../../molecules';
import { TabButton } from '../../atoms';
import { CITIES } from '../../../constants';

function LoginScreen(): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={<LoginForm />}
      rightSideButton={<TabButton tabName={CITIES.Amsterdam} isSelected={false} />}
    />
  );
}

export default LoginScreen;
