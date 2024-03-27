import { StarInput } from '..';
import { ChangeEvent } from 'react';

type RatingButtonProps = {
  value: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function isIdInRange (id: number): id is 1 | 2 | 3 | 4 | 5 {
  return (id >= 1 && id <= 5);
}

function RatingButton({value, handleChange}: RatingButtonProps) {
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
                handleChange={handleChange}
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
