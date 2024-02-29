import {OfferFeatureType} from '../../../types';

type OfferFeatureItemProps = {
  content: string;
  type: OfferFeatureType;
};
function OfferFeatureItem({content, type}: OfferFeatureItemProps) {
  return <li className={`offer__feature offer__feature--${type}`}>{content}</li>;
}

export default OfferFeatureItem;
