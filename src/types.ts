export enum TypePlace {
  APARTMENT = `Apartment`,
  ROOM = `Room`,
  HOUSE = `House`,
  HOTEL = `Hotel`
}

export enum AuthStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export enum OfferImg {
  MIN_COUNT = 0,
  MAX_COUNT = 6,
}

export interface Offer {
  id: number,
  isPremium: boolean,
  isFavorite: boolean,
  price: number,
  title: string,
  type: TypePlace.APARTMENT | TypePlace.ROOM | TypePlace.HOUSE | TypePlace.HOTEL,
  rating: number,
  picture: string,
  pictures: [],
  description: [],
  coordinates: [],
  room: number,
  guests: number,
  options: [],
  host: {
    avatar: string,
    name: string,
    isSuper: boolean,
  },
  city: string,
}
