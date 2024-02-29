import {OfferFeatureItem} from '../../atoms';
import {capitalize} from '../../../utils';

type OfferFeaturesProps = {
  maxAdultsCount: number;
  bedroomsCount: number;
  housingType: string;
};

function OfferFeatures({maxAdultsCount, bedroomsCount, housingType}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <OfferFeatureItem content={capitalize(housingType)} type={'entire'} />
      <OfferFeatureItem content={`${bedroomsCount} Bedrooms`} type={'bedrooms'} />
      <OfferFeatureItem content={`Max ${maxAdultsCount} adults`} type={'adults'} />
    </ul>
  );
}

export default OfferFeatures;
