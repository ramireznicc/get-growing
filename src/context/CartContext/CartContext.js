import { createContext } from "react";
import { useCart } from "../../hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useCart()}>{children}</CartContext.Provider>
  );
};

export default CartContext;
