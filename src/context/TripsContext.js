import createDataContext from './createDataContext';
import api from 'api/trips';
import { ERROR_MSG } from 'constants/vars';

const TripsReducer = (
  state = {
    error: null,
    loading: true
  },
  action
) => {
  switch (action.type) {
    case 'get_trips':
      return { ...state, loading: false, results: action.payload };
    case 'get_trips_fail':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const getTripsList = (dispatch) => {
  return async () => {
    try {
      const response = await api.get('/trips');
      dispatch({ type: 'get_trips', payload: response.data });
    } catch (error) {
      dispatch({ type: 'get_trips_fail', payload: ERROR_MSG });
    }
  };
};


export const { Context, Provider } = createDataContext(
  TripsReducer,
  { getTripsList },
  []
);
