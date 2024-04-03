import {PropsWithChildren, ReactElement} from 'react';
import { HeaderLogoIcon } from '../../atoms';
import { Header } from '../../organisms';

type SmallContentOnTheRightProps = PropsWithChildren<{
  showAccountData?: boolean;
  rightSideButton: ReactElement;
}>;

function ContentOnTheLeft({showAccountData, children, rightSideButton}: SmallContentOnTheRightProps): ReactElement {

  return (
    <div className="page page--gray page--login">
      {
        showAccountData
          ? <Header/>
          : (
            <header className="header">
              <div className="container">
                <div className="header__wrapper">
                  <HeaderLogoIcon size="medium"/>
                </div>
              </div>
            </header>
          )
      }
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            {children}
          </section>
          <section className="locations locations--login locations--current">
            {rightSideButton}
          </section>
        </div>
      </main>
    </div>
  );
}

export default ContentOnTheLeft;
