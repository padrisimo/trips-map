import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import colors from 'constants/colors'

function InfoTrip({ activeTrip }) {
  return (
    <Container>
      <p> Destination: {activeTrip.destination.address}</p>
      <p> Origin: {activeTrip.origin.address}</p>
      <p> Driver: {activeTrip.driverName}</p>
      <p> Status: {activeTrip.status}</p>
      <p>Start Time: {moment(activeTrip.startTime).format('lll')}</p>
      <p>End Time: {moment(activeTrip.endTime).format('lll')}</p>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  position: absolute;
  bottom: 0;
  background: ${colors.jack};
  padding: 2rem;
  font-size: .8rem;
  width: 100%;
`;

export default InfoTrip;