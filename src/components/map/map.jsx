import leaflet from 'leaflet';
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MapOption} from "../../constants";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._divRef = React.createRef();
    this._className = `${this.props.type}__map map`;
    this._map = null;
    this._icon = null;
    this._iconActive = null;
    this._markers = [];
    this._offers = this.props.offers;
    this._city = this.props.city;
    this._activeOffer = this.props.activeOffer;
  }

  _addMarker() {
    this._offers.map((offer) => {
      if (this._activeOffer && offer.id === this._activeOffer.id) {
        const marker = leaflet
          .marker(offer.coordinates, {icon: this._iconActive})
          .addTo(this._map);
        this._markers.push(marker);
      } else {
        const marker = leaflet
          .marker(offer.coordinates, {icon: this._icon})
          .addTo(this._map);
        this._markers.push(marker);
      }
    });
  }

  componentDidMount() {
    const mapContainer = this._divRef.current;
    const cityCoordinate = this._city.coordinates;

    this._icon = leaflet.icon({
      iconUrl: MapOption.ICON_SRC,
      iconSize: MapOption.ICON_SIZE
    });

    this._iconActive = leaflet.icon({
      iconUrl: MapOption.ICON_ACTIVE_SRC,
      iconSize: MapOption.ICON_SIZE
    });

    this._map = leaflet.map(mapContainer, {
      center: cityCoordinate,
      zoom: MapOption.ZOOM,
      zoomControl: false,
      marker: true
    });
    this._map.setView(cityCoordinate, MapOption.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._addMarker();
  }

  componentDidUpdate(prevProps) {
    const {offers, city, activeOffer} = this.props;

    if (prevProps.city !== city) {
      this._city = city;
      this._offers = offers;
      this._map.flyTo(city.coordinates);
      this._markers.forEach((marker) => this._map.removeLayer(marker));
      this._addMarker();
    }

    if (prevProps.activeOffer !== activeOffer) {
      this._activeOffer = activeOffer;
      this._markers.forEach((marker) => this._map.removeLayer(marker));
      this._addMarker();
    }
  }

  componentWillUnmount() {
    const mapContainer = this._divRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <section
        className={this._className}
        ref={this._divRef}
      >
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
  }),
  activeOffer: PropTypes.object,
};

export default Map;
