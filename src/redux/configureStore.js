import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './feature/coinSlice';
import darkModeReducer from './darkMode/darkModeSlice';

const store = configureStore({
  reducer: {
    name: 'coin',
    coin: coinReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
