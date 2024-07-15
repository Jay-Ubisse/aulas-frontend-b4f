import { createContext, useState } from "react";
const ShoppingCartContext = createContext(null);

export function ShoppingCartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(cartItem) {
    setCart((prevCart) => [...prevCart, cartItem]);
  }

  function removeFromCart(index) {}

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
