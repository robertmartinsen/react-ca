// src/CartTotal.js
import React from 'react';
import { useSelector } from 'react-redux';

function CartTotal() {
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  return <p>Cart Total: ${cartTotal.toFixed(2)}</p>;
}

export default CartTotal;
