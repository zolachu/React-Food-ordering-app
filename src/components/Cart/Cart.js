import { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "sushi", amount: 2, price: 4.5 }].map((item) => {
        return (
          <li>
            {item.name} {item.amount} {item.price}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      <div>
        {cartItems}
        <div className={styles.total}>
          <span>Total amount</span>
          <span>$35.6</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
