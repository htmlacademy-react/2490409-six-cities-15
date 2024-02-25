import {ReactElement} from 'react';
import ContentOnTheRight from '../../templates/content-on-the-right.tsx';
import {CITIES} from '../../../constants/cities.ts';
import TabButton from '../../atoms/city-tab-button/tab-button.tsx';
import LoginForm from '../../molecules/login-form/login-form.tsx';

function LoginScreen(): ReactElement {
  return (
    <ContentOnTheRight
      leftSideContent={<LoginForm />}
      rightSideButton={<TabButton tabName={CITIES.Amsterdam} isSelected={false} />}
    />
  );
}

export default LoginScreen;
