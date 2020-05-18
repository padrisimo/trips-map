import React, { useState, useEffect, useCallback } from 'react';

import useStopInfo from 'hooks/useStopInfo';
import { useHomeReducer, ACTIONS } from 'hooks/useHomeReducer';

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
  const [state, dispatch] = useHomeReducer();
  const { collapsed, activeTrip, stopInfo } = state;
  const { toggleCollapsed, setActiveTrip, setStopInfo } = ACTIONS;
  const [getStopInfo, result, errorMessage, clearErrorMessage] = useStopInfo();

  useEffect(() => {
    if (!result) return;
    dispatch({ type: setStopInfo, payload: result });
  }, [result]);

  useEffect(() => {
    if (!errorMessage) return;
    StopErrorMsg(errorMessage);
    clearErrorMessage();
  }, [errorMessage]);

  const handleMarkerClick = useCallback((stopId) => {
    if (!stopId) return;
    getStopInfo(stopId);
  }, []);

  const toggle = () => {
    dispatch({ type: toggleCollapsed });
  };

  const selectTrip = (trip) => dispatch({type:setActiveTrip, payload: trip })

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
            <Menu trips={trips} selectTrip={selectTrip} />
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
            onCancel={() => dispatch({type: setStopInfo, payload: null})}
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
