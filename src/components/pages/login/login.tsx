import { ReactElement } from 'react';
import { ContentOnTheLeft } from '../../templates';
import { LoginForm } from '../../molecules';
import { TabButton } from '../../atoms';
import { Cities } from '../../../constants';
import { createMainRouteWithCity, isCity } from '../../../utils';

function LoginPage(): ReactElement {
  const randomNumber = Math.round(Math.random() * 6);
  const randomCityKey = Object.keys(Cities)[randomNumber];
  const checkedCity = isCity(randomCityKey) ? Cities[randomCityKey] : Cities.Amsterdam;

  return (
    <ContentOnTheLeft
      testId="login-page"
      rightSideButton={
        <TabButton
          tabName={checkedCity} isSelected={false}
          link={createMainRouteWithCity(checkedCity)}
        />
      }
    >
      <LoginForm/>
    </ContentOnTheLeft>
  );
}

export default LoginPage;
