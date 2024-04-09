import { makeFakeStoreState, makeRandomAuthStatus } from '../utils/tests';
import { renderHook } from '@testing-library/react';
import { useAuthStatus } from './use-auth-status.ts';
import { getStoreWrapper } from '../utils/tests';

describe('useAuthStatus', () => {
  it('should return authorization status from store', () => {
    const authorizationStatus = makeRandomAuthStatus();

    const wrapper = getStoreWrapper(
      makeFakeStoreState({
        userStateProps: {
          authorizationStatus,
        }
      }),
    );

    const { result } = renderHook(() => useAuthStatus(), { wrapper });

    expect(result.current).toBe(authorizationStatus);
  });
});
