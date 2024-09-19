import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );
};

export default CartPage;
