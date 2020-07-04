import {TypePlace} from "../constants";

export const offers = [
  {
    id: `bkjnlkmlkms`,
    coordinates: [48.853438, 2.349984],
    city: `Paris`,
    isPremium: true,
    price: 35,
    title: `Beautiful & luxurious apartment at great location`,
    type: TypePlace.APARTMENT,
    rating: 1.3,
    picture: `img/apartment-02.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    room: 3,
    guests: 3,
    options: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Clara`,
      isSuper: false,
    },
    reviews: [
      {
        author: `Wilfred`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 2, 15),
      },
      {
        author: `Alfred`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 5, 23),
      },
      {
        author: `Tom`,
        avatar: `img/avatar-max.jpg`,
        rating: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 3, 23),
      },
    ]
  },
  {
    id: `jkbsdkjsjldk`,
    coordinates: [52.3809553943508, 4.939309666406198],
    city: `Amsterdam`,
    isPremium: false,
    price: 25,
    title: `Wood and stone place`,
    type: TypePlace.HOTEL,
    rating: 2.5,
    picture: `img/apartment-01.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    room: 3,
    guests: 3,
    options: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Clara`,
      isSuper: false,
    },
    reviews: [
      {
        author: `Jon`,
        avatar: `img/avatar-max.jpg`,
        rating: 5,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 3, 25),
      },
      {
        author: `Rory`,
        avatar: `img/avatar-max.jpg`,
        rating: 3,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 4, 5),
      },
    ]
  },
];

export const cities = [
  {
    title: `Paris`,
    isActive: false,
    coordinates: [48.856663, 2.351556]
  },
  {
    title: `Cologne`,
    isActive: false,
    coordinates: [47.010209, 2.320878]
  },
  {
    title: `Brussels`,
    isActive: false,
    coordinates: [50.851309, 4.351718]
  },
  {
    title: `Amsterdam`,
    isActive: false,
    coordinates: [52.38333, 4.9]
  },
  {
    title: `Hamburg`,
    isActive: false,
    coordinates: [53.552645, 9.966287]
  },
  {
    title: `Dusseldorf`,
    isActive: false,
    coordinates: [51.230569, 6.787428]
  },
];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_UP: `Price: low to high`,
  PRICE_DOWN: `Price: high to low`,
  TOP_RATING: `Top rated first`
};

export const SORT_TYPES = Object.values(SortType);
