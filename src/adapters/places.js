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
    }
  };
});
