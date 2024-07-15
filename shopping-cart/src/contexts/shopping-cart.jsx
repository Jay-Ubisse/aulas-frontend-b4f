import { createContext, useState } from "react";
import { shoppingCart } from "../data/products";
const ShoppingCartContext = createContext(null);

export function ShoppingCartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(cartItem) {
    shoppingCart.push(cartItem);
    setCart(shoppingCart);
  }

  function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    setCart(shoppingCart);
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
