import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <CartProvider>
      {cartIsShown && <Cart onShowCart={setCartIsShown} />}
      <Header onShowCart={setCartIsShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
