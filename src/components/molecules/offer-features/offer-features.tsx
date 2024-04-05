import { OfferFeatureItem } from '../../atoms';
import { pluralize } from '../../../utils';
import { HousingType } from '../../../types';
import { HOUSING } from '../../../constants';

type OfferFeaturesProps = {
  maxAdultsCount: number;
  bedroomsCount: number;
  housingType: HousingType;
};

function OfferFeatures({maxAdultsCount, bedroomsCount, housingType}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <OfferFeatureItem content={HOUSING[housingType]} type="entire" />
      <OfferFeatureItem content={`${bedroomsCount} ${pluralize('Bedroom', bedroomsCount)}`} type="bedrooms" />
      <OfferFeatureItem content={`Max ${maxAdultsCount} ${pluralize('adult', maxAdultsCount)}`} type="adults" />
    </ul>
  );
}

export default OfferFeatures;
