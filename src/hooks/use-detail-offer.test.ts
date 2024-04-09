import { getStoreWrapper, makeFakeStoreState } from '../utils/tests';
import { renderHook } from '@testing-library/react';
import { sliceName } from '../store/slices/offers/meta.ts';
import { useDetailOffer } from './use-detail-offer.ts';

describe('useDetailOffer', () => {
  it('should return detail offer from store', () => {
    const additionalDataIndex = 1;
    const state = makeFakeStoreState({
      offersStateProps: {
        offersLen: 2,
        additionalDataIndex,
      }
    });

    const expectedAdditionalData = state[sliceName].additionalOfferData;
    const expectedMainData = state[sliceName].offers[additionalDataIndex];

    const wrapper = getStoreWrapper(state);

    const { result } = renderHook(() => useDetailOffer(), { wrapper });

    expect(result.current).toEqual({...expectedAdditionalData, ...expectedMainData});
  });
});
