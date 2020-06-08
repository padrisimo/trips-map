import { act, renderHook } from '@testing-library/react-hooks';
import useStopInfo from 'hooks/useStopInfo';
import api from 'api/trips';

api.get = jest.fn();

describe('useStopInfo', () => {
  it('fethes stop info from api with query', async () => {
    const { result } = renderHook(useStopInfo);

    await act(async () => {
      result.current.getStopInfo(1);
    });

    expect(api.get).toBeCalledWith('/stops/1');
  });

  describe('when got data succesfully', () => {
    it.todo('handles succesful state correctly');
  });
  describe('whit an error during request', () => {
    it.todo('handles error state corecctly');
  });
});
