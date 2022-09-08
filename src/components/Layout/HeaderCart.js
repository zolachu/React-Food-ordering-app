import React, { useContext } from "react";
import styles from "./HeaderCart.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const context = useContext(CartContext);

  const numberOfItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Button
      variant="outline-dark"
      className={styles.button}
      onClick={props.onShowCart}
    >
      <span> Your Cart </span>
      <span>
        <AddShoppingCartIcon />
      </span>
      <span className={styles.badge}>{numberOfItems}</span>
    </Button>
  );
};

export default HeaderCart;
