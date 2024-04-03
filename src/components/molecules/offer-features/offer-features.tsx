import { OfferFeatureItem } from '../../atoms';
import { capitalize, pluralize } from '../../../utils';

type OfferFeaturesProps = {
  maxAdultsCount: number;
  bedroomsCount: number;
  housingType: string;
};

function OfferFeatures({maxAdultsCount, bedroomsCount, housingType}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <OfferFeatureItem content={capitalize(housingType)} type={'entire'} />
      <OfferFeatureItem content={`${bedroomsCount} ${pluralize('Bedroom', bedroomsCount)}`} type={'bedrooms'} />
      <OfferFeatureItem content={`Max ${maxAdultsCount} ${pluralize('adult', maxAdultsCount)}`} type={'adults'} />
    </ul>
  );
}

export default OfferFeatures;
