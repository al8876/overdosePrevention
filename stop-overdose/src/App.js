import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";


const onMarkerClick = () => {
  alert('hello')
}

const MyMapComponent = compose(
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




class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Stop Overdose BC</h1>
        </header>
        <p className="App-intro">
          First: call 911
        </p>
        <button onclick="instructions()">
          OVERDOSE INSTRUCTIONS CLICK HERE
        </button>
        <p>
        Responding to an overdose
        Call 911 if you suspect an overdose, the sooner you call the better the chance of recovery. While you’re waiting for first responders to arrive, follow SAVE ME protocol.

        Know that you are protected by the new Canadian Good Samaritan law. You will not be arrested or charged for drug possession by police if you call 9-1-1 to save the life of someone who overdoses.

        S
        Stimulate. Check if the person is responsive, can you wake them up?

        A
        Airway. Make sure there is nothing in the mouth blocking the airway, or stopping them from breathing.

        V
        Ventilate. Help them breathe. Plug the nose, tilt the head back and give one breath every 5 seconds.

        E
        Evaluate. Do you see any improvement?

        M
        Muscular injection. Inject one dose (1cc) of naloxone into a muscle. Click here  to learn more about Naloxone and how to safely administer it.

        E
        Evaluate and support. Is the person breathing? If they are not awake in 5 minutes, give one more 1cc dose of naloxone.

        If you need to leave the person alone for any reason, place them into the recovery position before you leave to keep the airway clear and prevent choking.

        Turn onto the side.
        Place hand under head to support the head.
        Place the top leg slightly in front of the leg touching the ground, and place the knee to the ground to prevent the body from rolling into the stomach.
      </p>
        <MyMapComponent isMarkerShown />
      </div>


    );
  }
}

export default App;
