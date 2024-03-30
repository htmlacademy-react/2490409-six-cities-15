import { ReactElement } from 'react';
import { HeaderLogoIcon } from '../../atoms';
import { Header } from '../../organisms';

type SmallContentOnTheRightProps = {
  showAccountData?: boolean;
  leftSideContent: ReactElement;
  rightSideButton: ReactElement;
};

function ContentOnTheRight({showAccountData, leftSideContent, rightSideButton}: SmallContentOnTheRightProps): ReactElement {

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
            {leftSideContent}
          </section>
          <section className="locations locations--login locations--current">
            {rightSideButton}
          </section>
        </div>
      </main>
    </div>
  );
}

export default ContentOnTheRight;
