import { useReducer } from 'react';

const initialState = {
  collapsed: false,
  activeTrip: null,
  stopInfo: null
};

export const ACTIONS = {
  toggleCollapsed: 'toggleCollapsed',
  setActiveTrip: 'setActiveTrip',
  setStopInfo: 'setStopInfo'
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.toggleCollapsed:
      return { ...state, collapsed: !state.collapsed };

    case ACTIONS.setActiveTrip:
      return { ...state, activeTrip: payload };

    case ACTIONS.setStopInfo:
      return { ...state, stopInfo: payload };

    default:
      return state;
  }
};

export const useHomeReducer = () => {
  return useReducer(reducer, initialState);
};