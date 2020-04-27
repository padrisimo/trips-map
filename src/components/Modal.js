import React from 'react';
import { Modal as AntModal } from 'antd';
import {
  PushpinOutlined,
  UserSwitchOutlined,
  TagOutlined,
  HomeOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import moment from 'moment';

const Price = styled.span`
  color: ${({ paid }) => (paid ? 'green' : 'tomato')};
`;

function Modal({ visible, onCancel, data }) {
  if (!data) return null;
  return (
    <AntModal
      title={
        <span>
          <PushpinOutlined /> Stop Info
        </span>
      }
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <p>
        <UserSwitchOutlined /> {data.userName}
      </p>
      <p>
        <HomeOutlined /> {data.address}
      </p>
      <p>
        <ClockCircleOutlined /> {moment(data.stopTime).format('lll')}
      </p>
      <p>
        <TagOutlined /> <Price paid={data.paid}>{data.price}€</Price>
      </p>
    </AntModal>
  );
}

export default Modal;
