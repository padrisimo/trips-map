import React,  { useState } from 'react';

import Menu from 'components/Menu';
import Logo from 'components/Logo';
import Trigger from 'components/Trigger';
import Avatar from 'components/Avatar';
import { Main, Header, Layout, Aside, Content } from 'components/Layout';

import profile from 'constants/profile';


function Home() {
  const [collapsed, setCollapsed] = useState(false);
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
        <Logo>Trips Map</Logo>
        <Menu />
      </Aside>
      <Main>
        <Header>
          <Trigger collapsed={collapsed} onClick={toggle} />
          <Avatar img={profile.img} link={profile.link} />
        </Header>
        <Content>Map Here</Content>
      </Main>
    </Layout>
  );
}

export default Home;