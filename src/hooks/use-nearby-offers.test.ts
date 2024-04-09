import { getStoreWrapper, makeFakeStoreState } from '../utils/tests';
import { renderHook } from '@testing-library/react';
import { sliceName } from '../store/slices/offers/meta.ts';
import { useNearbyOffers } from './use-nearby-offers.ts';

describe('useNearbyOffers', () => {
  it('should return nearby offers from store', () => {
    const nearbyIndexes = [2, 4];
    const state = makeFakeStoreState({
      offersStateProps: {
        offersLen: 10,
        nearbyIndexes,
      }
    });

    const expectedOffers = nearbyIndexes.map((index) => state[sliceName].offers[index]);

    const wrapper = getStoreWrapper(state);

    const { result } = renderHook(() => useNearbyOffers(), { wrapper });

    expect(result.current).toEqual(expectedOffers);
  });
});
