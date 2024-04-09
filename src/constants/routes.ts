const AppRoute = {
  Main: '/',
  MainWithCity: '/:city',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '/not-found',
  ServerError: '/server-error',
} as const;

const ApiRoute = {
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
  AppRoute,
  ApiRoute,
};
