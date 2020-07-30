import * as React from "react";
import Place from "../place/place";
import {AuthStatus, Offer} from "../../types";

interface Props {
  className: string;
  classNameCard: string;
  classCard: string;
  imgSize: {
    width: number;
    height: number;
  };
  offers: Offer[];
  status: AuthStatus.AUTH | AuthStatus.NO_AUTH;
  onClickByHeader: (id: number) => void;
  onHoverPlace: (offer: Offer) => void;
  onClickByFavorite: () => void;
}

const PlacesList: React.FC<Props> = (props: Props) => {
  const {
    status, offers, className, classNameCard, classCard, imgSize,
    onClickByHeader, onHoverPlace, onClickByFavorite
  } = props;

  return (
    <div className={className}>
      {offers.map((it) => {
        return <Place
          className={classNameCard}
          classCard = {classCard}
          imgSize = {imgSize}
          onClickByHeader={onClickByHeader}
          onHoverPlace = {onHoverPlace}
          onClickByFavorite = {onClickByFavorite}
          offer = {it}
          status={status}
          key = {it.id}
        />;
      })}
    </div>
  );
};

export default PlacesList;
