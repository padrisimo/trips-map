import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'context/TripsContext';
import HomeContainer from 'containers/HomeContainer';

function App() {
  return <HomeContainer />;
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
