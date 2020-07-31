import * as React from "react";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {PlacesListClass, MapType, Format} from "../../constants";
import Sorting from "../sorting/sorting";
import {AuthStatus, Offer} from "../../types";

interface IPlacesProps {
  sortTypes: [];
  sortType: string;
  sortIsOpen: boolean;
  offers: [Offer];
  activeCity: {
    title: string;
    coordinates: [];
  };
  activeOffer: Offer;
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByHeader: () => void;
  onHoverPlace: () => void;
  onClickBySort: () => void;
  onClickBySortType: () => void;
  onClickByFavorite: () => void;
}

const Places: React.FC<IPlacesProps> = (props: IPlacesProps) => {
  const {
    offers, activeCity, activeOffer, sortTypes, sortType, sortIsOpen, status,
    onClickByHeader, onHoverPlace, onClickBySort, onClickBySortType, onClickByFavorite
  } = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.title}</b>
        <Sorting
          sortTypes = {sortTypes}
          sortType = {sortType}
          isOpen = {sortIsOpen}
          onClickBySort={onClickBySort}
          onClickBySortType = {onClickBySortType}
        />
        <PlacesList
          status={status}
          className = {PlacesListClass.MAIN}
          classNameCard={PlacesListClass.MAIN_ARTICLE_NAME}
          classCard = {PlacesListClass.MAIN_CARD}
          imgSize = {Format.PLACE_IMG_SIZE.NORMAL}
          offers={offers}
          onClickByHeader={onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
        />
      </section>
      <div className="cities__right-section">
        <Map
          type = {MapType.MAIN}
          offers = {offers}
          activeOffer = {activeOffer}
          city = {activeCity}
        />
      </div>
    </div>
  );
};

export default Places;
