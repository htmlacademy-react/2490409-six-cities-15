import LogoIcon from '../atoms/logo-icon/logo-icon.tsx';
import {ReactElement} from 'react';

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
            <LogoIcon />
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
