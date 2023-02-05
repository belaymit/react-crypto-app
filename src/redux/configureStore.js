import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './feature/coinSlice';

const store = configureStore({
  reducer: {
    name: 'coin',
    coin: coinReducer,
  },
});

export default store;
