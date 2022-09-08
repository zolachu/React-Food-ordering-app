import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCart.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const [isBtnHighlighted, setBtnHighlighted] = useState(false);

  const context = useContext(CartContext);

  const numberOfItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (context.items.length === 0) return;
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [context.items]);

  return (
    <Button
      variant="outline-dark"
      className={btnClass}
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
