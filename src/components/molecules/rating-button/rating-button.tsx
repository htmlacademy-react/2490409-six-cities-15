import { StarInput } from '..';
import { ChangeEvent } from 'react';

type RatingButtonProps = {
  value: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

const titles: Record<number, string> = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
} as const;

function RatingButton({value, handleChange, isDisabled}: RatingButtonProps) {


  return (
    <>
      {
        Array.from({length: 5}, (_, i: number) => {
          const id = ++i;

          return (
            <StarInput
              key={id}
              id={id}
              title={titles[id]}
              checked={value === id}
              handleChange={handleChange}
              isDisabled={isDisabled}
            />
          );
        })
          .reverse()
      }
    </>
  );
}

export default RatingButton;
