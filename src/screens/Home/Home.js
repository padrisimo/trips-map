import React, { useState, useEffect } from 'react';

import useStopInfo from 'hooks/useStopInfo';

import Menu from 'components/Menu';
import Logo from 'components/Logo';
import Trigger from 'components/Trigger';
import Avatar from 'components/Avatar';
import {
  Main,
  Header,
  Layout,
  Aside,
  AsideContent,
  Content
} from 'components/Layout';
import MapView from 'components/MapView';
import InfoTrip from 'components/InfoTrip';
import Modal from 'components/Modal';
import StopErrorMsg from 'components/StopErrorMsg';

import profile from 'constants/profile';

function Home({ trips }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTrip, setActiveTrip] = useState(null);
  const [stopInfo, setstopInfo] = useState(null);
  const [getStopInfo, result, errorMessage, clearErrorMessage] = useStopInfo();

  useEffect(() => {
    if (!result) return;
    setstopInfo(result);
  }, [result]);

  useEffect(() => {
    if (!errorMessage) return;
    StopErrorMsg(errorMessage);
    clearErrorMessage();
  }, [errorMessage]);

  const handleMarkerClick = (stopId) => {
    if (!stopId) return;
    getStopInfo(stopId);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Aside
        width={300}
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <AsideContent>
          <div>
            <Logo>Trips Map</Logo>
            <Menu trips={trips} selectTrip={setActiveTrip} />
          </div>
          {activeTrip && <InfoTrip activeTrip={activeTrip} />}
        </AsideContent>
      </Aside>
      <Main>
        <Header>
          <Trigger collapsed={collapsed} onClick={toggle} />
          <Avatar collapsed={collapsed} img={profile.img} link={profile.link} />
        </Header>
        <Content collapsed={collapsed ? 1 : 0}>
          <Modal
            visible={!!stopInfo}
            onCancel={() => setstopInfo(null)}
            data={stopInfo}
          />
          <MapView
            activeTrip={activeTrip}
            handleMarkerClick={handleMarkerClick}
          />
        </Content>
      </Main>
    </Layout>
  );
}

export default Home;
