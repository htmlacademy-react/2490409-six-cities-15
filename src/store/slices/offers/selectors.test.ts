import { offersSelectors } from './selectors.ts';
import { makeFakeOffersState } from '../../../utils/tests';


describe('offers\' selectors', () => {
  it('should select offers from state', () => {
    const state = makeFakeOffersState({
      offersLen: 5,
    });
    const offers = offersSelectors.offers(state);

    expect(offers).toEqual(state.offers);
  });

  it('should select additional offer data from state', () => {
    const state = makeFakeOffersState({
      offersLen: 5,
      additionalDataIndex: 0,
    });
    const additionalOfferData = offersSelectors.additionalOfferData(state);

    expect(additionalOfferData).toEqual(state.additionalOfferData);
  });
});
