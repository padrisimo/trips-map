import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { CarOutlined, PushpinOutlined } from '@ant-design/icons';

const { SubMenu, Item } = AntdMenu;

export default function Menu({ trips, selectTrip }) {
  if (!trips) return null;

  const renderStopsList = (stops, routeId) =>
    stops.map((stop, i) => (
      <Item key={stop.id} >
        <span>
          <PushpinOutlined />
          <span>Stop {i + 1}</span>
        </span>
      </Item>
    ));

  const renderTripList = () => {
    return trips.map((trip, i) => {
      if (trip.stops.length === 1)
        return (
          <Item key={trip.driverName + i} onClick={() => selectTrip(trip)}>
            <span>
              <CarOutlined />
              <span>{trip.description}</span>
            </span>
          </Item>
        );

      return (
        <SubMenu
          key={trip.driverName + i}
          onTitleClick={() => selectTrip(trip)}
          title={
            <span>
              <CarOutlined />
              <span>{trip.description}</span>
            </span>
          }
        >
          {renderStopsList(trip.stops)}
        </SubMenu>
      );
    });
  };

  return (
    <AntdMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {renderTripList()}
    </AntdMenu>
  );
}
