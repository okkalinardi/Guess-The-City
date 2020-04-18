import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
require('dotenv').config()

const mapStyles = {
  width: '95vw',
  height: '65vh',
  featureType: 'city',
  elementType: 'labels.icon',
  stylers: [{visibility: 'off'}]
};

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLEMAPKEY
})(GoogleMap);
