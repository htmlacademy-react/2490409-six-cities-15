import { useEffect } from 'react';
import { CitiesType } from '../constants';
import { useAppDispatch } from '../store/helpers.ts';
import { changeCityAction } from '../store/action.ts';

function useCitySelect(city: CitiesType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCityAction({ city }));
  }, [city, dispatch]);
}

export default useCitySelect;
