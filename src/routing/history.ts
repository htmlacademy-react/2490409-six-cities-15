import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const redirect = (route: string) => {
  browserHistory.push(route);
};

export {
  browserHistory,
  redirect,
};
