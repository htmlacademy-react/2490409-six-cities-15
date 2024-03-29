import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionsArgsType, setOfferIdInRoute } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';
import { OfferData } from '../../../types';


const fetchOffersAction = createAsyncThunk<OfferData[], void, AsyncActionsArgsType>(
  'fetch/offersList',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(API_ROUTE.Get.OffersList);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.data;
  },
);

const changeFavoriteStatusAction = createAsyncThunk<
  OfferData,
  {id: OfferData['id']; status: boolean},
  AsyncActionsArgsType
>(
  'send/changeFavoriteStatus',
  async ({id: offerId, status}, { extra: api}) => {
    const response = await api.post<OfferData>(
      setOfferIdInRoute(API_ROUTE.Post.SetFavorite, offerId)
        .replace(':status', status ? '1' : '0'),
      {
        offerId,
        status: status ? 1 : 0
      },
    );

    return response.data;
  },
);


const fetchFavoritesOffersAction = createAsyncThunk<OfferData[], void, AsyncActionsArgsType>(
  'fetch/favoritesOffers',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(API_ROUTE.Get.Favorites);

    return response.data;
  },
);

export {
  fetchOffersAction,
  changeFavoriteStatusAction,
  fetchFavoritesOffersAction,
};
