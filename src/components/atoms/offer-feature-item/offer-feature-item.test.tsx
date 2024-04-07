import OfferFeatureItem from './offer-feature-item.tsx';
import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';

describe('OfferFeatureItem component', () => {
  const id = 'offer-feature-item';

  it('should render correct css class and text with type "adults"', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--adults';

    render(<OfferFeatureItem content={content} type="adults"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });

  it('should render correct css class and text with type "entire"', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--entire';

    render(<OfferFeatureItem content={content} type="entire"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });

  it('should render correct css class and text with type "bedrooms"', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--bedrooms';

    render(<OfferFeatureItem content={content} type="bedrooms"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });
});
