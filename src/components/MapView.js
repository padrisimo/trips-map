import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';

function MapView({ google, activeTrip }) {
  const renderStopMarkers = () => {
    if (!activeTrip || activeTrip.stops.length == 1) return null;
    return activeTrip.stops.map((stop) => (
      <Marker
        key={stop.id}
        position={{ lat: stop.point._latitude, lng: stop.point._longitude }}
      />
    ));
  };

  const arc = { lat: 41.3910524, lng: 2.1806449 };

  const renderCenter = activeTrip
    ? {
        lat: activeTrip.destination.point._latitude,
        lng: activeTrip.destination.point._longitude
      }
    : arc;

  return (
    <Container>
      <Map
        google={google}
        zoom={13}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        center={renderCenter}
        initialCenter={arc}
      >
        {activeTrip && (
          <Marker
            position={{
              lat: activeTrip.destination.point._latitude,
              lng: activeTrip.destination.point._longitude
            }}
          />
        )}
        {renderStopMarkers()}
        {activeTrip && (
          <Marker
            position={{
              lat: activeTrip.origin.point._latitude,
              lng: activeTrip.origin.point._longitude
            }}
          />
        )}
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
