import {TypePlace} from "../../constants";

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
    }
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
    }
  },
];
