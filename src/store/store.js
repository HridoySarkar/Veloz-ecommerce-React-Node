import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from '../app/pages/home/store/homeSlice';
import { cartSclice } from './slices/cartSlice';

const store = configureStore({
  reducer: {
    homeSlice: homeSlice.reducer,
    cartSclice: cartSclice.reducer,
  },
});

export default store;
