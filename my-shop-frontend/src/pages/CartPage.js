import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

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
