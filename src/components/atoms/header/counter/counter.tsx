import { ReactElement } from 'react';

function Counter({count}: {count: number}): ReactElement {
  return (
    <span className="header__favorite-count">{count}</span>
  );
}

export default Counter;
