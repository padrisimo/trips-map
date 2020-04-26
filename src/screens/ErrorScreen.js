import React from 'react';
import { ApiOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from 'constants/colors';

export default function ErrorScreen({msg}) {
  return (
    <Container>
      <ApiOutlined style={{fontSize: 48}}/>
  <p>{msg}</p>
    </Container>
  );
}

const Container = styled.div`
  background: tomato;
  color: ${colors.walter};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
