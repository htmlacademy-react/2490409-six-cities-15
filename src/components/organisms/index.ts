import Header from './header/header.tsx';
import Footer from './footer/footer.tsx';
import OffersListWithMap from './offers-list-with-map/offers-list-with-map.tsx';
import DetailOfferContent from './detail-offer-content/detail-offer-content.tsx';
import { memo } from 'react';

const MemorizedHeader = memo(Header);
const MemorizedFooter = memo(Footer);

export {
  MemorizedHeader as Header,
  MemorizedFooter as Footer,
  OffersListWithMap,
  DetailOfferContent,
};
