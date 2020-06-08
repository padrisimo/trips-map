import { act, renderHook } from '@testing-library/react-hooks';
import useStopInfo from 'hooks/useStopInfo';
import api from 'api/trips';
import { STOP_FAIL } from 'constants/vars';

describe('useStopInfo', () => {
  it('fethes stop info from api with query', async () => {
    const { result } = renderHook(useStopInfo);
    api.get = jest.fn();

    await act(async () => {
      result.current.getStopInfo(1);
    });

    expect(api.get).toBeCalledWith('/stops/1');
  });

  describe('when got data succesfully', () => {
    it('handles succesful state correctly', async () => {
      api.get = jest.fn(() => ({
        data: {
          stopName: 'Arc de Triomf'
        }
      }));

      const { result } = renderHook(useStopInfo);

      await act(async () => {
        result.current.getStopInfo(1);
      });

      expect(result.current.result).toStrictEqual({
        stopName: 'Arc de Triomf'
      });
    });
  });

  describe('whit an error during request', () => {
    it('handles error state corecctly', async () => {
      const { result } = renderHook(useStopInfo);

      api.get = jest.fn(() => {
        return new Promise(() => {
          throw 'Error';
        });
      });

      await act(async () => {
        result.current.getStopInfo(1);
      });

      expect(result.current.errorMessage).toStrictEqual(STOP_FAIL);
    });
  });
});
