import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const Context = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {Context.items.map((item) => {
        return (
          <li key={item.key}>
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
          <span>{Context.totalAmount}</span>
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
