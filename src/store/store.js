import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from '../app/pages/home/store/homeSlice';
import { cartSlice } from './slices/cartSlice';

const store = configureStore({
  reducer: {
    homeSlice: homeSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
