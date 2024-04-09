import { ReactElement } from 'react';

function Email({email}: {email: string}): ReactElement {
  return (
    <span className="header__user-name user__name" data-testid="header-email">
      {email}
    </span>
  );
}

export default Email;
