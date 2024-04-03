const APP_ROUTE = {
  Main: '/',
  MainWithCity: '/:city',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '/not-found',
  ServerError: '/server-error',
} as const;

const API_ROUTE = {
  Get : {
    OffersList: '/offers',
    DetailOffer: '/offers/:offerId',
    NearBy: '/offers/:offerId/nearby',
    Favorites: '/favorite',
    Comments: '/comments/:offerId',
    AuthDataByToken: '/login',
  },
  Post: {
    SetFavorite: '/favorite/:offerId/:status',
    AddComment: '/comments/:offerId',
    Login: '/login',
  },
  Delete: {
    Logout: '/logout',
  }
} as const;

export {
  APP_ROUTE,
  API_ROUTE,
};
