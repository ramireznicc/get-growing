import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clear = () => setCart([]);

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const total = () => {
    return cart
      .reduce((total, item) => total + item.data.price * item.quantity, 0)
      .toFixed(2);
  };

  return { cart, setCart, addItem, clear, removeItem, total };
};
