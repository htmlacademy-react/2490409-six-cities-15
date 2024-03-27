import { CommentData, OfferData, OfferDetailData } from '../../../types';
import { setOfferIdInRoute, createAppAsyncThunk } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';

const fetchDetailOfferAction = createAppAsyncThunk<OfferDetailData, OfferData['id']>(
  'fetch/detailOffer',
  async (id, { extra: api}) => {
    const response = await api.get<OfferDetailData>(
      setOfferIdInRoute(API_ROUTE.Get.DetailOffer, id)
    );

    return response.data;
  },
);

const fetchNearbyOffersAction = createAppAsyncThunk<OfferData[], OfferData['id']>(
  'fetch/nearByOffers',
  async (id, { extra: api}) => {
    const response = await api.get<OfferData[]>(
      setOfferIdInRoute(API_ROUTE.Get.NearBy, id)
    );

    return response.data;
  },
);

const fetchCommentsAction = createAppAsyncThunk<CommentData[], OfferData['id']>(
  'fetch/fetchComments',
  async (id, { extra: api}) => {
    const response = await api.get<CommentData[]>(
      setOfferIdInRoute(API_ROUTE.Get.Comments, id)
    );

    return response.data;
  },
);

const addCommentAction = createAppAsyncThunk<
  CommentData,
  Pick<CommentData, 'comment' | 'rating'> & { id: OfferDetailData['id'] }
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
