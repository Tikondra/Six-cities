import {nanoid} from "nanoid";
import {TypePlace} from "../constants";

export default [
  {
    id: nanoid(),
    isPremium: true,
    price: 35,
    title: `Beautiful & luxurious apartment at great location`,
    type: TypePlace.APARTMENT,
    rating: 1.3,
    picture: `img/apartment-02.jpg`,
  },
  {
    id: nanoid(),
    isPremium: false,
    price: 25,
    title: `Wood and stone place`,
    type: TypePlace.HOTEL,
    rating: 2.5,
    picture: `img/apartment-01.jpg`,
  },
  {
    id: nanoid(),
    isPremium: false,
    price: 30,
    title: `Nice, cozy, warm big bed apartment`,
    type: TypePlace.HOUSE,
    rating: 3.7,
    picture: `img/apartment-03.jpg`,
  },
  {
    id: nanoid(),
    isPremium: true,
    price: 10,
    title: `Canal View Prinsengracht`,
    type: TypePlace.ROOM,
    rating: 4.1,
    picture: `img/room.jpg`,
  },
];
