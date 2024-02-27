import { ReactElement } from 'react';
import { HeaderLogoIcon } from '../../atoms';

type SmallContentOnTheRightProps = {
  leftSideContent: ReactElement;
  rightSideButton: ReactElement;
};

function ContentOnTheRight({leftSideContent, rightSideButton}: SmallContentOnTheRightProps): ReactElement {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogoIcon/>
          </div>
        </div>
      </header>
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
