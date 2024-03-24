import {ReactElement, useEffect} from 'react';
import { DetailOfferContent, Header } from '../../organisms';
import { LoaderContainer } from '../../molecules';
import { useParams } from 'react-router-dom';
import {
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction
} from '../../../store/slices/offers/thunk.ts';
import { useAppDispatch, useAppSelector } from '../../../store/helpers.ts';
import { offersSelectors } from '../../../store/slices/offers';
import { NotFoundPage } from '../index.ts';

function OfferPage(): ReactElement {
  const { id: offerId = '' } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailOfferAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
    dispatch(fetchCommentsAction(offerId));
    // eslint-disable-next-line
  }, [offerId]);

  const isLoading = useAppSelector(offersSelectors.isLoading);
  const offer = useAppSelector(offersSelectors.detailOffer);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers);
  const reviews = useAppSelector(offersSelectors.detailOfferReviews);

  if (!isLoading && offer === null) {
    return <NotFoundPage type="offer" />;
  }

  let placesNear = null;
  if (nearbyOffers) {
    placesNear = nearbyOffers.map((place) => (
      {...place.location, id: place.id}
    ));
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        {
          isLoading
            ? <LoaderContainer/>
            : (
              offer &&
              <DetailOfferContent
                offer={offer}
                elementsType="offer"
                reviews={reviews}
                nearbyOffers={nearbyOffers}
                nearbyLocations={placesNear}
                currentLocation={{...offer.location, id: offer.id}}
              />
            )
        }
      </main>
    </div>
  );
}

export default OfferPage;
