const APP_ROUTE = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  OfferNotLogged: '/dev-offer',
} as const;

export default APP_ROUTE;
