import { getStoreWrapper, makeFakeStoreState } from '../utils/tests';
import { renderHook } from '@testing-library/react';
import { useFavoriteOffers } from './use-favorite-offers.ts';
import { sliceName } from '../store/slices/offers/meta.ts';

describe('useFavoriteOffers', () => {
  it('should return favorite offers from store', () => {
    const state = makeFakeStoreState({
      offersStateProps: {
        offersLen: 10,
        offersFavoriteStatus: false,
      }
    });

    state[sliceName].offers[3].isFavorite = true;
    const expectedOffers = [state[sliceName].offers[3]];

    const wrapper = getStoreWrapper(state);

    const { result } = renderHook(() => useFavoriteOffers(), { wrapper });

    expect(result.current).toEqual(expectedOffers);
  });
});
