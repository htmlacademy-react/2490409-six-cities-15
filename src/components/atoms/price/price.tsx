import { IconsAndLabelsStyleClassType } from '../../../types';

type PriceProps = {
  price: number;
  type?: IconsAndLabelsStyleClassType;
};

function Price({price, type = 'place-card'}: PriceProps) {
  return (
    <div className={`${type}__price`} data-testid="price">
      <b className={`${type}__price-value`}>€{price}</b>
      <span className={`${type}__price-text`}>{type === 'place-card' ? '/' : ''}&nbsp;night</span>
    </div>
  );
}

export default Price;
