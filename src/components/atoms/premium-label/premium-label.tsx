import { IconsAndLabelsStyleClassType } from '../../../types';

type PremiumLabelProps = {
  type?: IconsAndLabelsStyleClassType;
};

function PremiumLabel({type = 'place-card'}: PremiumLabelProps) {
  return (
    <div className={`${type}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;
