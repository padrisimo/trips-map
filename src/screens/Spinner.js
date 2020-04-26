import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from "constants/colors";

export default function Spinner() {
  return (
    <Container>
      <LoadingOutlined  spin />
    </Container>
  );
}

const Container = styled.div`
  font-size: 48px;
  background: ${colors.darkBlue};
  color: ${colors.walter};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;