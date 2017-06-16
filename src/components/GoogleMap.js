import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const { lat, lng } = this.props;
    new google.maps.Map(this.map, {
      zoom: 12,
      center: { lat, lng }
    })
  }

  render() {
    return (
      <div className="map" ref={map => {this.map = map}}></div>
    )
  }
}

export default GoogleMap;
