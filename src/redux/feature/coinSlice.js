import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import URL from '../../common/constant';

const initialState = {
  coins: [],
  error: null,
  selectedCoins: [],
  isLoading: false,
};

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const resp = await fetch(URL);
  const data = await resp.json();
  return data.coins;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    removeSelectedCoin: (state) => ({
      ...state,
      selectedCoins: [],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(getCoins.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        coins: action.payload,
      }))
      .addCase(getCoins.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default coinSlice.reducer;

export const error = (state) => state.coin.error;
export const isLoading = (state) => state.coin.isLoading;
export const allCoins = (state) => state.coin.coins;
