import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionsArgsType } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';
import { API } from '../../../services';
import { OfferData } from '../../../types';

const fetchOffers = createAsyncThunk<OfferData[], undefined, AsyncActionsArgsType>(
  'fetch/offersList',
  async () => {
    const response = await API.get<OfferData[]>(API_ROUTE.Get.OffersList);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.data;
  },
);

export {
  fetchOffers,
};
