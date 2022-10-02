import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isNotFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const nameInputRef = useRef("");
  const addressInputRef = useRef("");
  const postalInputRef = useRef("");

  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    postal: true,
  });

  const confirmHandler = (e) => {
    e.preventDefault();
    console.log("gonna send this mf");
    const enteredName = nameInputRef.current.value;
    const address = addressInputRef.current.value;
    const postal = postalInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredAddressValid = !isEmpty(address);
    const postalValid = isNotFiveChars(postal);

    setFormValidity({
      name: enteredNameValid,
      address: enteredAddressValid,
      postal: postalValid,
    });

    const formValid = enteredNameValid && enteredAddressValid && postalValid;
    if (!formValid) {
      return;
    }
    props.onSubmit({
      name: enteredName,
      address: address,
      postal: postal,
    });
  };
  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input id="" placeholder="name" type="text" ref={nameInputRef} />
        {!formValidity.name && <span>enter valid name</span>}
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Street</label>
        <input id="" placeholder="address" type="text" ref={addressInputRef} />
        {!formValidity.address && <span>enter valid address</span>}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">ZIP code</label>
        <input id="" placeholder="postal" type="text" ref={postalInputRef} />
        {!formValidity.postal && <span>enter valid postal</span>}
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          CONFIRM
        </button>
        <button type="button" onClick={props.onHide}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
