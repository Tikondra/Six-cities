import {nanoid} from "nanoid";
import {TypePlace} from "../constants";

export default [
  {
    id: nanoid(),
    coordinates: [52.3909553943508, 4.85309666406198],
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
    id: nanoid(),
    coordinates: [52.369553943508, 4.85309666406198],
    isPremium: false,
    price: 25,
    title: `Wood and stone place`,
    type: TypePlace.HOTEL,
    rating: 2.5,
    picture: `img/apartment-01.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    room: 1,
    guests: 2,
    options: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Donna`,
      isSuper: false,
    }
  },
  {
    id: nanoid(),
    coordinates: [52.3909553943508, 4.929309666406198],
    isPremium: false,
    price: 30,
    title: `Nice, cozy, warm big bed apartment`,
    type: TypePlace.HOUSE,
    rating: 3.7,
    picture: `img/apartment-03.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    room: 2,
    guests: 4,
    options: [`Towels`, `Baby seat`, `Cabel TV`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Marta`,
      isSuper: false,
    }
  },
  {
    id: nanoid(),
    coordinates: [52.3809553943508, 4.939309666406198],
    isPremium: true,
    price: 10,
    title: `Canal View Prinsengracht`,
    type: TypePlace.ROOM,
    rating: 4.1,
    picture: `img/room.jpg`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/room.jpg`, `img/apartment-01.jpg`],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    room: 4,
    guests: 1,
    options: [`Washing machine`, `Coffee machine`, `Dishwasher`, `Wi-Fi`, `Heating`, `Kitchen`, `Fridge`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Rose`,
      isSuper: true,
    }
  },
];
