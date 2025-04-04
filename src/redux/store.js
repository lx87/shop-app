import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './slices/shopSlice';

const store = configureStore({
  reducer: {
    shop: shopSlice,
  },
});

export default store;