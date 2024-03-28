import { createAppAsyncThunk, setOfferIdInRoute } from '../../helpers.ts';
import { API_ROUTE } from '../../../constants';
import { CommentData, OfferData, OfferDetailData } from '../../../types';


const fetchOffersAction = createAppAsyncThunk<OfferData[], void>(
  'fetch/offersList',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(API_ROUTE.Get.OffersList);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return response.data;
  },
);

const changeFavoriteStatusAction = createAppAsyncThunk<OfferData, {id: OfferData['id']; status: boolean}>(
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


const fetchFavoritesOffersAction = createAppAsyncThunk<OfferData[], void>(
  'fetch/favoritesOffers',
  async (_arg, { extra: api}) => {
    const response = await api.get<OfferData[]>(API_ROUTE.Get.Favorites);

    return response.data;
  },
);

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
  fetchOffersAction,
  changeFavoriteStatusAction,
  fetchFavoritesOffersAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
  fetchCommentsAction,
  addCommentAction,
};
