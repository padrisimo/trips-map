import React, { useContext, useEffect } from 'react';
import { Context } from '../context/TripsContext';

import Home from 'screens/Home';
import Spinner from 'screens/Spinner';
import ErrorScreen from 'screens/ErrorScreen';

function HomeContainer() {
  const { state, getTripsList } = useContext(Context);

  useEffect(() => {
    getTripsList();
  }, []);

  if (state.error) return <ErrorScreen msg={state.error} />;

  if (!state.results || state.loading) return <Spinner />;

  return <Home trips={state.results} />;
}

export default HomeContainer;
