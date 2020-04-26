import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from 'constants/colors';

const Wrap = styled.span`
  font-size: 1.2rem;
  line-height: 4rem;
  cursor: pointer;
  transition: color 0.3s;
  :hover {
    color: ${colors.blue};
  }
`;

export default function Trigger({ collapsed, ...rest }) {
  return (
    <Wrap {...rest}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Wrap>
  );
}
