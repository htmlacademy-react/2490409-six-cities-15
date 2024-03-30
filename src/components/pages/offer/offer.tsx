import { ReactElement, useEffect } from 'react';
import { DetailOfferContent, Header } from '../../organisms';
import { Loader } from '../../molecules';
import { useParams } from 'react-router-dom';
import {
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction
} from '../../../store/slices/offers/thunk.ts';
import { useAppDispatch, useAppSelector } from '../../../store/helpers.ts';
import { ErrorPage } from '../index.ts';
import { offersSelectors } from '../../../store/slices/offers';
import { REQUEST_STATUS } from '../../../constants';
import classNames from 'classnames';
import './offer.css';

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

  const requestStatus = useAppSelector(offersSelectors.offersRequestStatus);
  const offer = useAppSelector(offersSelectors.detailOffer);
  const nearbyOffers = useAppSelector(offersSelectors.nearbyOffers);
  const reviews = useAppSelector(offersSelectors.detailOfferReviews);

  if (!requestStatus && offer === null) {
    return <ErrorPage/>;
  }

  let placesNear = null;
  if (nearbyOffers) {
    placesNear = nearbyOffers.map((place) => (
      {...place.location, id: place.id}
    ));
  }

  const isLoading = requestStatus === REQUEST_STATUS.Loading;

  const divClassname = classNames(
    'page',
    {'offer__loading': isLoading},
  );

  const mainClassname = classNames(
    'page__main',
    'page__main--offer',
    {'page__offer__loading': isLoading},
  );

  return (
    <div className={divClassname}>
      <Header/>
      <main className={mainClassname}>
        {
          isLoading
            ? <Loader/>
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
