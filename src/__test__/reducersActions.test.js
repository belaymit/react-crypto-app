import * as coinActions from '../redux/feature/coinSlice';
import coinReducer, { error, isLoading, allCoins } from '../redux/feature/coinSlice';

describe('Test for Coin Reducer', () => {
  it('return initial states', () => {
    expect(coinReducer(undefined, {})).toEqual({
      coins: [],
      isLoading: false,
      error: null,
    });
  });

  it('handles getCoins.pending', () => {
    expect(coinReducer(undefined, coinActions.getCoins.pending())).toEqual({
      coins: [],
      isLoading: true,
      error: null,
    });
  });

  it('handle getCoins.fulfilled', () => {
    expect(coinReducer(undefined, coinActions.getCoins.fulfilled([1, 2, 3, 4, 5]))).toEqual({
      coins: [1, 2, 3, 4, 5],
      isLoading: false,
      error: null,
    });
  });

  it('handles getCoins.rejected', () => {
    expect(coinReducer(undefined, coinActions.getCoins.rejected('error'))).toEqual({
      coins: [],
      isLoading: false,
      error: 'error',
    });
  });

  it('handles error event', () => {
    expect(error({ coin: { error: 'error' } })).toEqual('error');
  });

  it('it handles loading event', () => {
    expect(isLoading({ coin: { isLoading: true } })).toEqual(true);
  });

  it('handles success or fulfilled', () => {
    expect(allCoins({ coin: { coins: [1, 2, 3, 4, 5] } })).toEqual([1, 2, 3, 4, 5]);
  });
});
