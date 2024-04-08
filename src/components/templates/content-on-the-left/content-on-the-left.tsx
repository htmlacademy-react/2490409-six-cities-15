import { PropsWithChildren, ReactElement } from 'react';
import { HeaderLogoIcon } from '../../atoms';
import { Header } from '../../organisms';

type SmallContentOnTheRightProps = PropsWithChildren<{
  showAccountData?: boolean;
  rightSideButton: ReactElement;
  testId?: string;
}>;

function ContentOnTheLeft({showAccountData, children, rightSideButton, testId}: SmallContentOnTheRightProps): ReactElement {

  return (
    <div className="page page--gray page--login" data-testid={testId ?? 'content-on-the-left'}>
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
