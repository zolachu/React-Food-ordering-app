import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartOpenerHandler = () => {
    setCartShown(true);
  };

  const cartCloseHandler = () => {
    setCartShown(false);
  };
  return (
    <Fragment>
      {cartShown && <Cart onHideCart={cartCloseHandler} />}
      <Header onShowCart={cartOpenerHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
