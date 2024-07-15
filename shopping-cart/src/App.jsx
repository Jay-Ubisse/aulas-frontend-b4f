import { ShoppingCartContextProvider } from "./contexts/shopping-cart";
import { Home } from "./pages/home";

export function App() {
  return (
    <ShoppingCartContextProvider>
      <Home />
    </ShoppingCartContextProvider>
  );
}
