import * as leaflet from 'leaflet';
import * as React from "react";
import {MapOption} from "../../constants";
import {Offer} from "../../types";

interface Props {
  offers: Offer[];
  type: string;
  city: {
    coordinates: [];
  };
  activeOffer: Offer;
}

class Map extends React.PureComponent<Props, {}> {
  private divRef: React.RefObject<HTMLInputElement>;
  private className: string;
  private map: any;
  private icon: null;
  private iconActive: null;
  private markers: any[];
  private offers: Offer[];
  private city: {
    coordinates: [];
  };
  private activeOffer: Offer;

  constructor(props) {
    super(props);

    this.divRef = React.createRef();
    this.className = `${this.props.type}__map map`;
    this.map = null;
    this.icon = null;
    this.iconActive = null;
    this.markers = [];
    this.offers = this.props.offers;
    this.city = this.props.city;
    this.activeOffer = this.props.activeOffer;
  }

  _getIcon(offer) {
    return this.activeOffer && offer.id === this.activeOffer.id ? {icon: this.iconActive} : {icon: this.icon};
  }

  _addMarker() {
    if (this.activeOffer) {
      const marker = leaflet
        .marker(this.activeOffer.coordinates, this._getIcon(this.activeOffer))
        .addTo(this.map);
      this.markers.push(marker);
    }
    this.offers.map((offer: Offer) => {
      const marker = leaflet
      .marker(offer.coordinates, this._getIcon(offer))
      .addTo(this.map);
      this.markers.push(marker);
    });
  }

  componentDidMount() {
    const mapContainer = this.divRef.current;
    const cityCoordinate = this.city.coordinates;

    this.icon = leaflet.icon({
      iconUrl: MapOption.ICON_SRC,
      iconSize: MapOption.ICON_SIZE
    });

    this.iconActive = leaflet.icon({
      iconUrl: MapOption.ICON_ACTIVE_SRC,
      iconSize: MapOption.ICON_SIZE
    });

    this.map = leaflet.map(mapContainer, {
      center: cityCoordinate,
      zoom: MapOption.ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(cityCoordinate, MapOption.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addMarker();
  }

  componentDidUpdate(prevProps) {
    const {offers, city, activeOffer} = this.props;

    if (prevProps.city !== city) {
      this.city = city;
      this.offers = offers;
      this.map.flyTo(city.coordinates);
      this.markers.forEach((marker) => this.map.removeLayer(marker));
      this._addMarker();
    }

    if (prevProps.activeOffer !== activeOffer) {
      this.activeOffer = activeOffer;
      this.markers.forEach((marker) => this.map.removeLayer(marker));
      this._addMarker();
    }

    if (prevProps.offers !== offers) {
      this.offers = offers;
      this.markers.forEach((marker) => this.map.removeLayer(marker));
      this._addMarker();
    }
  }

  componentWillUnmount() {
    const mapContainer = this.divRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <section
        className={this.className}
        ref={this.divRef}
      >
      </section>
    );
  }
}

export default Map;
