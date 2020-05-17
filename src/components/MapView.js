import React, { useEffect, memo } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import styled from 'styled-components';
import { ARC } from 'constants/vars';
import colors from 'constants/colors';
import usePathLine from 'hooks/usePathLine';

const MapView = memo(function MapView({ google, activeTrip, handleMarkerClick }) {
  const [getPathCoords, path] = usePathLine();

  useEffect(() => {
    if (!activeTrip) return;
    getPathCoords(activeTrip);
  }, [activeTrip]);

  const renderStopMarkers = () => {
    if (!activeTrip || activeTrip.stops.length === 1) return null;
    return activeTrip.stops.map((stop) => (
      <Marker
        onClick={() => handleMarkerClick(stop.id)}
        key={stop.id}
        position={{ lat: stop.point._latitude, lng: stop.point._longitude }}
      />
    ));
  };

  const renderCenter = activeTrip
    ? {
        lat: activeTrip.destination.point._latitude,
        lng: activeTrip.destination.point._longitude
      }
    : ARC;

  return (
    <Container>
      {activeTrip ? (
        <GoogleMap google={google} center={renderCenter} initialCenter={ARC}>
          <Polyline
            path={path}
            strokeColor={colors.russian}
            strokeOpacity={1.0}
            strokeWeight={2}
          />
          <Marker
            position={{
              lat: activeTrip.destination.point._latitude,
              lng: activeTrip.destination.point._longitude
            }}
          />
          {renderStopMarkers()}
          <Marker
            position={{
              lat: activeTrip.origin.point._latitude,
              lng: activeTrip.origin.point._longitude
            }}
          />
        </GoogleMap>
      ) : (
        <GoogleMap google={google} initialCenter={ARC} />
      )}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0;
  height: 100%;
`;

const GoogleMap = ({ children = null, ...rest }) => (
  <Map
    zoom={11}
    mapTypeControl={false}
    streetViewControl={false}
    fullscreenControl={false}
    {...rest}
  >
    {children}
  </Map>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(MapView);
