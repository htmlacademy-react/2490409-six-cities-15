import { act, renderHook } from '@testing-library/react';
import { useBooleanHelpers } from './use-boolean-helpers.ts';

describe('useBooleanHelpers', () => {
  it('should return object with 4 elements', () => {
    const { result } = renderHook(() => useBooleanHelpers(true));

    const {isOn, on, off, toggle} = result.current;

    expect(isOn).toBeTruthy();
    expect(typeof on).toBe('function');
    expect(typeof off).toBe('function');
    expect(typeof toggle).toBe('function');
  });

  it('should always set state to true after using "on"', () => {
    const { result } = renderHook(() => useBooleanHelpers(false));

    const {on} = result.current;

    expect(result.current.isOn).toBeFalsy();

    act(() => on());

    expect(result.current.isOn).toBeTruthy();

    act(() => on());

    expect(result.current.isOn).toBeTruthy();
  });

  it('should always set state to false after using "off"', () => {
    const { result } = renderHook(() => useBooleanHelpers(true));

    const {off} = result.current;

    expect(result.current.isOn).toBeTruthy();

    act(() => off());

    expect(result.current.isOn).toBeFalsy();

    act(() => off());

    expect(result.current.isOn).toBeFalsy();
  });
});
