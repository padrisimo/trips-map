import { useState } from 'react';
import { trips as api } from 'api/trips';

export default () => {
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getStopInfo = async stopId => {
    try {
      const response = await api.get(`/stops/${stopId}`);

      setResult(response.data);
    } catch (error) {
      setErrorMessage("ups info not found :(");
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return [getStopInfo, result, errorMessage, clearErrorMessage];
};