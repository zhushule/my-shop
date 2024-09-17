import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );
};

export default CartPage;
