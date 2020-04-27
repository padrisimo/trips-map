import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { CarOutlined } from '@ant-design/icons';

const { Item } = AntdMenu;

export default function Menu({ trips, selectTrip }) {
  if (!trips) return null;

  const renderTripList = () => {
    return trips.map((trip, i) => (
      <Item key={trip.driverName + i} onClick={() => selectTrip(trip)}>
        <span>
          <CarOutlined />
          <span>{trip.description}</span>
        </span>
      </Item>
    ));
  };

  return (
    <AntdMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {renderTripList()}
    </AntdMenu>
  );
}
