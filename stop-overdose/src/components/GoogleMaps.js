import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
  defaultZoom={10}
  defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
>
  {props.isMarkerShown && <Marker position={{ lat: 49.2827, lng: -123.1207 }} onClick={this.onMarkerClick} />}
  </GoogleMap>
)

export default class MyMapComponent extends Component {   
  render() {
    return (
      <MapComponent isMarkerShown />  
    )
  }
}

