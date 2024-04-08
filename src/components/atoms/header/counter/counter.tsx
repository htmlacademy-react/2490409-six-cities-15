import { ReactElement } from 'react';

function Counter({count}: {count: number}): ReactElement {
  return (
    <span data-testid="header-counter" className="header__favorite-count">{count}</span>
  );
}

export default Counter;
