import { useState } from 'react';
import { Nullable } from 'vitest';

function useSelect(): [Nullable<string>, (id?: string) => void, () => void] {
  const [ selected, setSelected] = useState<Nullable<string>>(null);

  const select = (id?: string) => {
    setSelected(id);
  };

  const clear = () => {
    setSelected(null);
  };

  return [selected, select, clear];
}

export default useSelect;
