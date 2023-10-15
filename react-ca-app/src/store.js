import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './actions/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
});

export default store;





