import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionsArgsType } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';
import { API } from '../../../services';
import { CommentData, OfferData, OfferDetailData } from '../../../types';

const replaceOfferId = (route: string, id: string) => route.replace(':offerId', id);

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
    const response = await API.get<OfferDetailData>(replaceOfferId(API_ROUTE.Get.DetailOffer, id));

    return response.data;
  },
);

const fetchNearbyOffersAction = createAsyncThunk<OfferData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/nearByOffers',
  async (id) => {
    const response = await API.get<OfferData[]>(replaceOfferId(API_ROUTE.Get.NearBy, id));

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
    const response = await API.get<CommentData[]>(replaceOfferId(API_ROUTE.Get.Comments, id));

    return response.data;
  },
);

const changeFavoriteStatusAction = createAsyncThunk<
  OfferData,
  {id: OfferData['id']; status: boolean},
  AsyncActionsArgsType
>(
  'send/changeFavoriteStatus',
  async ({id: offerId, status}) => {
    const response = await API.post<OfferData>(
      replaceOfferId(API_ROUTE.Post.SetFavorite, offerId)
        .replace(':status', status ? '1' : '0'),
      {
        offerId,
        status: status ? 1 : 0
      },
    );

    return response.data;
  },
);

const addCommentAction = createAsyncThunk<
  CommentData,
  Pick<CommentData, 'comment' | 'rating'> & { id: OfferDetailData['id'] },
  AsyncActionsArgsType
>(
  'send/addComment',
  async ({id: offerId, comment, rating}) => {
    const response = await API.post<CommentData>(replaceOfferId(API_ROUTE.Post.AddComment, offerId), { comment, rating });

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
