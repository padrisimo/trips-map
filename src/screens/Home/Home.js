import React from 'react';
import './Home.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CarOutlined,
  PushpinOutlined
} from '@ant-design/icons';

import Menu from 'components/Menu';

const { Header, Sider, Content } = Layout;


class Home extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          width={300}
          collapsedWidth="0"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">Trips Map</div>
          <Menu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow: 'hidden'
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
} 

export default Home;
