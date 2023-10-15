import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cartTotal: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.cartTotal = state.products.reduce((total, product) => {
        return total + product.price;
      }, 0);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
