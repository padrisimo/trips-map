import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapView(props) {

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        padding: 0,
        height: '100%'
      }}
    >
      <Map
        google={props.google}
        zoom={14}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA'
})(MapView);
