import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import { AsyncActionsArgsType, setOfferIdInRoute } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';

const fetchDetailOfferAction = createAsyncThunk<OfferDetailData, OfferData['id'], AsyncActionsArgsType>(
  'fetch/detailOffer',
  async (id, { extra: api}) => {
    const response = await api.get<OfferDetailData>(
      setOfferIdInRoute(API_ROUTE.Get.DetailOffer, id)
    );

    return response.data;
  },
);

const fetchNearbyOffersAction = createAsyncThunk<OfferData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/nearByOffers',
  async (id, { extra: api}) => {
    const response = await api.get<OfferData[]>(
      setOfferIdInRoute(API_ROUTE.Get.NearBy, id)
    );

    return response.data;
  },
);

const fetchCommentsAction = createAsyncThunk<CommentData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/fetchComments',
  async (id, { extra: api}) => {
    const response = await api.get<CommentData[]>(
      setOfferIdInRoute(API_ROUTE.Get.Comments, id)
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
  async ({id: offerId, comment, rating}, { extra: api}) => {
    const response = await api.post<CommentData>(
      setOfferIdInRoute(API_ROUTE.Post.AddComment, offerId), { comment, rating }
    );

    return response.data;
  },
);

export {
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
  fetchCommentsAction,
  addCommentAction,
};
