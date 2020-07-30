import * as React from "react";
import {nanoid} from "nanoid";

interface Props {
  pictures: string[];
  title: string;
}

const getPicture = (pictures, title) => pictures.map((it) => {
  return <div key={nanoid()} className="property__image-wrapper">
    <img className="property__image" src={it} alt={title} />
  </div>;
});

const OfferGallery: React.FC<Props> = (props: Props) => {
  const {pictures, title} = props;

  return <div className="property__gallery-container container">
    <div className="property__gallery">
      {getPicture(pictures.slice(0, 6), title)}
    </div>
  </div>;
};

export default OfferGallery;
