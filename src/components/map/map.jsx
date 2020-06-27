import leaflet from 'leaflet';
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MapOption} from "../../constants";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._divRef = React.createRef();
    this._className = `${this.props.type}__map map`;
  }

  componentDidMount() {
    const {offers} = this.props;
    const mapContainer = this._divRef.current;
    const city = MapOption.START_COORDINATE;

    const icon = leaflet.icon({
      iconUrl: MapOption.ICON_SRC,
      iconSize: MapOption.ICON_SIZE
    });

    const map = leaflet.map(mapContainer, {
      center: city,
      zoom: MapOption.ZOOM,
      zoomControl: false,
      marker: true
    });
    map.setView(city, MapOption.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((it) => {
      leaflet
        .marker(it.coordinates, {icon})
        .addTo(map);
    });
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
};

export default Map;
