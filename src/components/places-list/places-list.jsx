import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Place from "../place/place.jsx";

const getPlaces = (places, onClickByHeader, onHoverPlace) => places.map((it) => {
  return <Place
    onClickByHeader={onClickByHeader}
    onHoverPlace = {onHoverPlace}
    offer = {it}
    key = {it.id}
  />;
});

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null,
    };

    this.offers = props.offers;
    this.onHoverPlace = this.onHoverPlace.bind(this);
  }

  onHoverPlace(evt) {
    const offerId = evt.currentTarget.id;
    this.setState({
      offer: this.offers.find((it) => it.id === offerId)
    });
  }

  render() {
    const {onClickByHeader} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {getPlaces(this.offers, onClickByHeader, this.onHoverPlace)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
};

export default PlacesList;
