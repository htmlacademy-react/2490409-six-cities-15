import { StarInput } from '..';
import { ChangeEvent } from 'react';

type RatingButtonProps = {
  value: number;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function isIdInRange (id: number): id is 1 | 2 | 3 | 4 | 5 {
  return (id >= 1 && id <= 5);
}

function RatingButton({value, handleOnChange}: RatingButtonProps) {
  const titles = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly',
  } as const;

  return (
    <>
      {
        Array.from({length: 5}, (_, i: number) => {
          const id = ++i;

          if (isIdInRange(id)) {
            return (
              <StarInput
                key={id}
                id={id}
                title={titles[id]}
                checked={value === id}
                handleOnChange={handleOnChange}
              />
            );
          }
        })
          .reverse()
      }
    </>
  );
}

export default RatingButton;
