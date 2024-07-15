import { useContext } from "react";
import ShoppingCartContext from "../contexts/shopping-cart";
import { products, shoppingCart } from "../data/products";
import "../App.css";

export const Home = () => {
  const { cart, addToCart, removeFromCart } = useContext(ShoppingCartContext);
  let total = 0;
  function handleAddToCart(id) {
    const product = products.find((product) => product.id === id);
    addToCart(product);
  }

  return (
    <main>
      Items naacarrinha:{" "}
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
              <button onClick={() => handleAddToCart(product.id)}>
                Adicionar a carrinha
              </button>
            </div>
          ))}
        </div>
        <nav>
          <h2>Produtos na carrinha</h2>
          {cart.map((cartItem) => {
            total += cartItem.price;

            return (
              <div key={cartItem.id}>
                <h3>{cartItem.name}</h3>
                <p>
                  Preço: <span>{cartItem.price}</span>
                </p>
                <button style={{ backgroundColor: "red" }}>Eliminar</button>
              </div>
            );
          })}
          <div>
            <h1>Tota: {total.toFixed(2)} MT</h1>
          </div>
        </nav>
      </section>
    </main>
  );
};
