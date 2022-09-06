import React from "react";
import styles from "./HeaderCart.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const HeaderCart = (props) => {
  return (
    <Button variant="outline-dark" className={styles.button}>
      <span> Your Cart </span>
      <span>
        <AddShoppingCartIcon />
      </span>
      <span className={styles.badge}>3</span>
    </Button>
  );
};

export default HeaderCart;
