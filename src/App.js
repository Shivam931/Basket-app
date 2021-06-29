import React from "react";
import "./App.css";
import data from "./data";
import Itemcart from "./Itemcart";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>BasketApp</h1>
      </header>
      <div className="App__body">
        <CartProvider>
          <main className="App__bodyLeft">
            <h2>Groceries</h2>
            <section>
              {data.productData.map((item) => {
                return (
                  <Itemcart title={item.title} item={item} key={item.id} />
                );
              })}
            </section>
          </main>
          <main className="App__bodyRight">
            <h2>Your Basket</h2>
            <Cart />
          </main>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
