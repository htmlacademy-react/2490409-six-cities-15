import { IconsAndLabelsStyleClassType } from '../../../types';

type PremiumLabelProps = {
  type?: IconsAndLabelsStyleClassType;
};

function PremiumLabel({type = 'place-card'}: PremiumLabelProps) {
  return (
    <div className={`${type}__mark`} data-testid="premium-label">
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;
