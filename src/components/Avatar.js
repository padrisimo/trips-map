import React from 'react';
import { Avatar as AntAvatar } from 'antd';
import styled from 'styled-components';

const AvatarWrap = styled.div`
  @media (max-width: 414px) {
    display: ${({ collapsed }) => (collapsed ? 'block' : 'none')};
  }
`;

function Avatar({ img, link, initial = 'A', collapsed = false }) {
  return (
    <AvatarWrap collapsed={collapsed}>
      {!img && !link ? (
        <AntAvatar>{initial}</AntAvatar>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <AntAvatar src={img} />
        </a>
      )}
    </AvatarWrap>
  );
}

export default Avatar;
