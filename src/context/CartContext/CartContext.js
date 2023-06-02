import { createContext, useState } from "react";
import { useCart } from "../../hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const quantity = 12;

  return (
    <CartContext.Provider value={useCart()}>{children}</CartContext.Provider>
  );
};

export default CartContext;
