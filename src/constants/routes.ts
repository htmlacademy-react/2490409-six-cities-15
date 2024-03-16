const APP_ROUTE = {
  Main: '/',
  MainWithCity: '/:city',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export default APP_ROUTE;
