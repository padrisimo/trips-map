import React from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';
import { Layout } from 'antd';

const Main = styled(Layout)`
  min-height: 100vh;
`;

const Header = styled(Layout.Header)`
  background: ${colors.walter};
  padding: 0;
  display: flex;
  justify-content:space-between;
  padding: 0 1.5rem;
  align-items: center;
`;

const Aside = Layout.Sider;

const Content = styled((props) => <Layout.Content {...props}/>)`
  background: ${colors.walter};
  margin: 1.5rem 1rem;
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    display: ${({collapsed}) => (collapsed ? 'block' : 'none')};
  }
`;

export { Main, Header, Layout, Aside, Content };
