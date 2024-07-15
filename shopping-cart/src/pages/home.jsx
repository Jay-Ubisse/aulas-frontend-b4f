import { useContext } from "react";
import ShoppingCartContext from "../contexts/shopping-cart";
import { products, shoppingCart } from "../data/products";
import "../App.css";

export const Home = () => {
  const { cart, addToCart, removeFromCart } = useContext(ShoppingCartContext);
  console.log(shoppingCart);

  function handleAddToCart() {
    addToCart(products[0]);
  }

  return (
    <main>
      Items naa carrinha:{" "}
      <span style={{ fontWeight: "bold" }}>{cart.length}</span>
      <section>
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              style={{ border: "1px solid black", margin: "4px" }}
            >
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={handleAddToCart}>Adicionar a carrinha</button>
            </div>
          ))}
        </div>
        <nav>
          <h2>Produtos na carrinha</h2>
          {cart.map((cartItem) => (
            <div key={cartItem.id}>
              <h3>{cartItem.name}</h3>
            </div>
          ))}
        </nav>
      </section>
    </main>
  );
};
