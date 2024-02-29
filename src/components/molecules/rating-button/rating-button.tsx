import {StarInput} from '..';

function RatingButton() {
  return (
    <>
      {[...Array(5).keys()].map(((id) => <StarInput key={id} id={id} />))}
    </>
  );
}

export default RatingButton;
