import { ReactElement } from 'react';
import { ContentOnTheLeft } from '../../templates';
import { LoginForm } from '../../molecules';
import { TabButton } from '../../atoms';
import { CITIES } from '../../../constants';
import { createMainRouteWithCity } from '../../../utils';
import { CitiesType } from '../../../types';

function LoginPage(): ReactElement {
  const randomNumber = Math.round(Math.random() * 6);
  const randomCityKey = Object.keys(CITIES)[randomNumber] as CitiesType;

  return (
    <ContentOnTheLeft
      rightSideButton={
        <TabButton
          tabName={CITIES[randomCityKey]} isSelected={false}
          link={createMainRouteWithCity(CITIES[randomCityKey])}
        />
      }
    >
      <LoginForm/>
    </ContentOnTheLeft>
  );
}

export default LoginPage;
