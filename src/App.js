import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartOpenerHandler = () => {
    setCartShown(true);
  };

  const cartCloseHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={cartCloseHandler} />}
      <Header onShowCart={cartOpenerHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
