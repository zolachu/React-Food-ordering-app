import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { Check } from "@material-ui/icons";

const Cart = (props) => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const Context = useContext(CartContext);

  const hasItems = Context.items.length > 0;
  const totalAmount = `$${Context.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    Context.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    Context.addItem({ ...item, amount: 1 });
  };

  const clickOrderHandler = () => {
    setShow(true);
  };
  const onHide = () => {
    setShow(false);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const url = "https://mealapp-eb871-default-rtdb.firebaseio.com/orders.json";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ user: userData, orderItems: Context.items }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    Context.clearItems();
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

  const cartContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {show && <Checkout onHide={onHide} onSubmit={submitOrderHandler} />}
      {!show && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={clickOrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data</p>;
  const didSubmitModalContent = <p>Order Submitted</p>;
  return (
    <Modal onClose={props.onHideCart}>
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {!isSubmitting && !didSubmit && cartContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
