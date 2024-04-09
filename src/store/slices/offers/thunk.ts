import {AsyncActionsArgsType, createAppAsyncThunk, setFavoriteStatusInRoute, setOfferIdInRoute} from '../../helpers.ts';
import { ApiRoute } from '../../../constants';
import { CommentData, OfferData, OfferDetailData } from '../../../types';


const fetchOffersAction = createAppAsyncThunk<OfferData[], void, AsyncActionsArgsType>(
  'fetch/offersList',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(ApiRoute.Get.OffersList);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.data;
  },
);

const changeFavoriteStatusAction = createAppAsyncThunk<OfferData, {id: OfferData['id']; status: boolean}, AsyncActionsArgsType>(
  'send/changeFavoriteStatus',
  async ({id: offerId, status}, { extra: api}) => {
    const response = await api.post<OfferData>(
      setFavoriteStatusInRoute(setOfferIdInRoute(ApiRoute.Post.SetFavorite, offerId), status),
      {
        offerId,
        status: status ? 1 : 0
      },
    );

    return response.data;
  },
);


const fetchFavoritesOffersAction = createAppAsyncThunk<OfferData[], void, AsyncActionsArgsType>(
  'fetch/favoritesOffers',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(ApiRoute.Get.Favorites);

    return response.data;
  },
);

const fetchDetailOfferAction = createAppAsyncThunk<OfferDetailData, OfferData['id'], AsyncActionsArgsType>(
  'fetch/detailOffer',
  async (id, { extra: api}) => {
    const response = await api.get<OfferDetailData>(
      setOfferIdInRoute(ApiRoute.Get.DetailOffer, id)
    );

    return response.data;
  },
);

const fetchNearbyOffersAction = createAppAsyncThunk<OfferData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/nearByOffers',
  async (id, { extra: api}) => {
    const response = await api.get<OfferData[]>(
      setOfferIdInRoute(ApiRoute.Get.NearBy, id)
    );

    return response.data;
  },
);

const fetchCommentsAction = createAppAsyncThunk<CommentData[], OfferData['id'], AsyncActionsArgsType>(
  'fetch/fetchComments',
  async (id, { extra: api}) => {
    const response = await api.get<CommentData[]>(
      setOfferIdInRoute(ApiRoute.Get.Comments, id)
    );

    return response.data;
  },
);

const addCommentAction = createAppAsyncThunk<
  CommentData,
  Pick<CommentData, 'comment' | 'rating'> & { id: OfferDetailData['id'] },
  AsyncActionsArgsType
>(
  'send/addComment',
  async ({id: offerId, comment, rating}, { extra: api}) => {
    const response = await api.post<CommentData>(
      setOfferIdInRoute(ApiRoute.Post.AddComment, offerId), { comment, rating }
    );

    return response.data;
  },
);

export {
  fetchOffersAction,
  changeFavoriteStatusAction,
  fetchFavoritesOffersAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
  fetchCommentsAction,
  addCommentAction,
};
