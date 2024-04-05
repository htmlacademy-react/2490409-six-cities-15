import { offersSelectors } from './selectors.ts';
import { OffersStateType } from './index.ts';
import { REQUEST_STATUS } from '../../../constants';
import { makeFakeOffer, makeOfferAdditionalData } from '../../../utils/tests';


describe('offers\' selectors', () => {

  const state: OffersStateType = {
    offers: Array(5).map((_item, index) => makeFakeOffer(String(index))),
    additionalOfferData: makeOfferAdditionalData('1'),
    detailOfferReviews: null,
    nearbyOffersIds: ['2'],
    offersRequestStatus: REQUEST_STATUS.Idle,
    reviewRequestStatus: REQUEST_STATUS.Idle,
    activeOfferId: null,
  };

  it('should select offers from state', () => {
    const offers = offersSelectors.offers(state);

    expect(offers[0]).toEqual(state.offers[0]);
  });

  it('should select additional offer data from state', () => {
    const additionalOfferData = offersSelectors.additionalOfferData(state);

    expect(additionalOfferData).toEqual(state.additionalOfferData);
  });
});
