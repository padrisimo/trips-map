import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';

function MapView(props) {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0;
  height: 100%;
`;

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(MapView);
