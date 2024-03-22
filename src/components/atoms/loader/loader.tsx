import { useEffect, useState } from 'react';
import {
  calcNextColorChannelValue,
  calcEaseWhiteBlackColor,
} from '../../../utils';

const STEPS = 10;

function Loader() {
  const [colorChannelValue, setColorChannelValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorChannelValue((prevState) => calcNextColorChannelValue(prevState, STEPS));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="150" height="170" viewBox="0 5 14 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.343 16.383q.222.492.129.902H12.8q.258-2.016-.89-3.228t-3.516-1.213q-1.64 0-2.983.75a7.9 7.9 0 0 0-2.326 1.98q-1.148 1.441-1.898 3.61-.423 1.218-.844 3.164-.703 3.315.035 5.414.95 2.683 4.16 2.683 2.988 0 4.793-1.816t2.309-4.195q.515-2.391-.604-3.926-1.12-1.535-3.38-1.535a5.5 5.5 0 0 0-1.952.34 5 5 0 0 0-1.67 1.078q.562-1.97 1.149-2.977 1.078-1.828 2.707-1.828 1.089 0 1.453.797M7.099 26.889q-.815.837-1.928.838-1.137 0-1.693-.868-.557-.867-.264-2.238.363-1.7 1.512-2.46a2.84 2.84 0 0 1 1.617-.517q1.055 0 1.611.792.556.79.24 2.279-.28 1.335-1.095 2.174"
        fill={calcEaseWhiteBlackColor(colorChannelValue)}
      />
    </svg>
  );
}

export default Loader;
