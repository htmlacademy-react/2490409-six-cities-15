import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionsArgsType } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';
import { API } from '../../../services';
import { CommentData, OfferData, OfferDetailData } from '../../../types';

const fetchOffersAction = createAsyncThunk<OfferData[], undefined, AsyncActionsArgsType>(
  'fetch/offersList',
  async () => {
    const response = await API.get<OfferData[]>(API_ROUTE.Get.OffersList);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.data;
  },
);

const fetchDetailOfferAction = createAsyncThunk<OfferDetailData, OfferData['id'], AsyncActionsArgsType>(
  'fetch/detailOffer',
  async (id) => {
    const route = API_ROUTE.Get.DetailOffer.replace(':offerId', id);
    const response = await API.get<OfferDetailData>(route);

    return response.data;
  },
);

const fetchNearbyOffersAction = createAsyncThunk<OfferData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/nearByOffers',
  async (id) => {
    const route = API_ROUTE.Get.NearBy.replace(':offerId', id);
    const response = await API.get<OfferData[]>(route);

    return response.data;
  },
);

const fetchFavoritesOffersAction = createAsyncThunk<OfferData[], undefined, AsyncActionsArgsType>(
  'fetch/favoritesOffers',
  async () => {
    const response = await API.get<OfferData[]>(API_ROUTE.Get.Favorites);

    return response.data;
  },
);

const fetchCommentsAction = createAsyncThunk<CommentData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/fetchComments',
  async (id) => {
    const response = await API.get<CommentData[]>(API_ROUTE.Get.Comments, { data: id });

    return response.data;
  },
);

const changeFavoriteStatusAction = createAsyncThunk<
  OfferData,
  {offerId: OfferData['id']; status: boolean},
  AsyncActionsArgsType
>(
  'send/changeFavoriteStatus',
  async ({offerId, status}) => {
    const response = await API.post<OfferData>(
      API_ROUTE.Post.SetFavorite,
      {
        offerId,
        status: status ? 1 : 0
      },
    );

    return response.data;
  },
);

const addCommentAction = createAsyncThunk<
  OfferData,
  CommentData,
  AsyncActionsArgsType
>(
  'send/addComment',
  async ({comment, rating}) => {
    const response = await API.post<OfferData>(API_ROUTE.Post.AddComment, { comment, rating},);

    return response.data;
  },
);


export {
  fetchOffersAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
  fetchCommentsAction,
  fetchFavoritesOffersAction,
  changeFavoriteStatusAction,
  addCommentAction,
};
