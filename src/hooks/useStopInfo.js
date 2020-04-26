import { useState } from 'react';
import api from 'api/trips';
import { STOP_FAIL } from 'constants/vars';

export default () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getStopInfo = async (stopId) => {
    try {
      const response = await api.get(`/stops/${stopId}`);

      setResult(response.data);
    } catch (error) {
      setErrorMessage(STOP_FAIL);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return [getStopInfo, result, errorMessage, clearErrorMessage];
};
