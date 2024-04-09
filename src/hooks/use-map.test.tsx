import { render, screen, renderHook } from '@testing-library/react';
import { useMap } from './use-map.ts';
import { MutableRefObject } from 'react';
import { makeFakeLocation } from '../utils/tests';
import { Map } from 'leaflet';

describe('useMap', () => {
  it('should return an instance of Map from leaflet package', () => {
    const testId = 'map';
    render(<div id="map" data-testid={testId}></div>);

    const mapRef: MutableRefObject<HTMLElement> = {current: screen.getByTestId(testId)};
    const location = makeFakeLocation();

    const { result } = renderHook(() => useMap(mapRef, location));

    expect(result.current).toBeInstanceOf(Map);
  });
});
