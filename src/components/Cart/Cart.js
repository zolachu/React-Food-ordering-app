import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Context = useContext(CartContext);

  const hasItems = Context.items.length > 0;
  const totalAmount = `$${Context.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    Context.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    Context.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {Context.items.map((item) => {
        return (
          <CartItem
            key={item.key}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
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
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && <button className={styles.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
