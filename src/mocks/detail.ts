import {OfferDetailData} from './types.ts';

const detailOffer: OfferDetailData = {
  'id': 'e083bbfc-259c-41b9-8991-67cef8ff96a0',
  'title': 'Wood and stone place',
  'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
  'type': 'house',
  'price': 196,
  'images': [
    'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    'latitude': 48.868610000000006,
    'longitude': 2.330499,
    'zoom': 16
  },
  'goods': [
    'Cable TV',
    'Washer',
    'Laptop friendly workspace',
    'Dishwasher',
    'Heating',
    'Air conditioning',
    'Wi-Fi',
    'Breakfast',
    'Fridge',
    'Baby seat',
    'Washing machine',
    'Kitchen',
    'Towels'
  ],
  'host': {
    'isPro': true,
    'name': 'Angelina',
    'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
  },
  'isPremium': true,
  'isFavorite': false,
  'rating': 2.5,
  'bedrooms': 1,
  'maxAdults': 4
};

export { detailOffer };
