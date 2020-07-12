import {toNormalCase} from "../utils";

export const createPlaces = (data) => data.map((place) => {
  return {
    id: String(place.id),
    coordinates: [place.location.latitude, place.location.longitude],
    city: place.city.name,
    isPremium: place.is_premium,
    isFavorite: place.is_favorite,
    price: place.price,
    title: place.title,
    type: toNormalCase(place.type),
    rating: place.rating,
    picture: place.preview_image,
    pictures: place.images,
    description: [place.description],
    room: place.bedrooms,
    guests: place.max_adults,
    options: place.goods,
    host: {
      avatar: place.host.avatar_url,
      name: place.host.name,
      isSuper: place.host.is_pro,
      id: place.host.id
    },
    reviews: [
      {
        author: `Kenny`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(2020, 0, 15),
      },
    ],
  };
});
