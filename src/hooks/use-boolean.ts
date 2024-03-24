import { useState } from 'react';

function useBoolean(initial: boolean = false) {
  const [isOn, setIsOn] = useState(initial);

  return {
    isOn,
    on: () => setIsOn(true),
    off: () => setIsOn(false),
    toggle: () => setIsOn((prev) => !prev),
  };
}

export {
  useBoolean,
};

