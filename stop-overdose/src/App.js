import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMapComponent from './components/GoogleMaps.js'

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 49.2827, lng: -123.1207 }} />}
//   </GoogleMap>
// ))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stop Overdose BC</h1>
        </header>
        <p className="App-intro">
          First: call 911.
        </p>
        <MyMapComponent/>
      </div>
    );
  }
}

export default App;
