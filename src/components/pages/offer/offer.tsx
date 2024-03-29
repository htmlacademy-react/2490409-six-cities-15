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
import { NotFoundPage } from '../index.ts';
import { offersSelectors } from '../../../store/slices/offers';
import { REQUEST_STATUS } from '../../../constants';

function OfferPage(): ReactElement {
  const { id: offerId = '' } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchDetailOfferAction(offerId)),
      dispatch(fetchNearbyOffersAction(offerId)),
      dispatch(fetchCommentsAction(offerId))
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerId]);

  const requestStatus = useAppSelector(offersSelectors.getRequestStatus);
  const offer = useAppSelector(offersSelectors.detailOffer);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers);
  const reviews = useAppSelector(offersSelectors.detailOfferReviews);

  if (!requestStatus && offer === null) {
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
          requestStatus === REQUEST_STATUS.Loading
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
