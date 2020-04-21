import React from 'react';
import { Avatar as AntAvatar } from 'antd';

function Avatar({img, link, initial="A" }) {
  if(!img && !link )return <AntAvatar>{initial}</AntAvatar>;
  return <a href={link} target="_blank"><AntAvatar src={img}/></a>
}

export default Avatar;
