import { useState } from 'react';

export default () => {
  const [path, setPath] = useState([]);

  const getPathCoords = (activeTrip) => {
    const initialPath = [
      {
        lat: activeTrip.origin.point._latitude,
        lng: activeTrip.origin.point._longitude
      },
      {
        lat: activeTrip.destination.point._latitude,
        lng: activeTrip.destination.point._longitude
      }
    ];
    if (activeTrip.stops.length <= 1) {
      setPath(initialPath);
    }

    const mergeCoords = async () => {
      const stopCoords = await activeTrip.stops
        .filter((rawStop) => rawStop.point !== undefined)
        .map((stop) => ({
          lat: stop.point._latitude,
          lng: stop.point._longitude
        }));

      setPath([initialPath[0], ...stopCoords, initialPath[1]]);
    };

    mergeCoords();
  };

  return [getPathCoords, path];
};
