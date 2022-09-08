import styles from "./Input.module.css";
import React, { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
