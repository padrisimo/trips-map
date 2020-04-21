import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { CarOutlined, PushpinOutlined } from '@ant-design/icons';

const { SubMenu, Item } = AntdMenu;

export default function Menu() {
  return (
    <AntdMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Item key="1">
        <CarOutlined />
        <span>nav 1</span>
      </Item>
      <Item key="2">
        <CarOutlined />
        <span>nav 2</span>
      </Item>
      <Item key="3">
        <CarOutlined />
        <span>nav 3</span>
      </Item>
      <SubMenu
        key="sub1"
        onTitleClick={() => console.log('yea')}
        title={
          <span>
            <CarOutlined />
            <span>Navigation One</span>
          </span>
        }
      >
        <Item key="13">
          <span>
            <PushpinOutlined />
            <span>Stop</span>
          </span>
        </Item>
        <Item key="23">
          <span>
            <PushpinOutlined />
            <span>Stop</span>
          </span>
        </Item>
        <Item key="33">
          <span>
            <PushpinOutlined />
            <span>Stop</span>
          </span>
        </Item>
        <Item key="43">
          <span>
            <PushpinOutlined />
            <span>Stop</span>
          </span>
        </Item>
      </SubMenu>
    </AntdMenu>
  );
}
