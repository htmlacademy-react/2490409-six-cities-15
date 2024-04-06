import OfferFeatureItem from './offer-feature-item.tsx';
import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';

describe('Offer Feature Item', () => {
  const id = 'offer-feature-item';

  it('renders correctly adults', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--adults';

    render(<OfferFeatureItem content={content} type="adults"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });

  it('renders correctly entire', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--entire';

    render(<OfferFeatureItem content={content} type="entire"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });

  it('renders correctly bedrooms', () => {
    const content = datatype.string(20);
    const className = 'offer__feature--bedrooms';

    render(<OfferFeatureItem content={content} type="bedrooms"/>);

    const offerFeatureItem = screen.getByTestId(id);
    expect(offerFeatureItem).toBeInTheDocument();
    expect(offerFeatureItem).toHaveTextContent(content);
    expect(offerFeatureItem).toHaveClass(className);
  });
});
