import React, { useState } from "react";
import styles from "./AddItemButton.module.css";
import AddItemModal from "./AddItemModal";

const MealAddButton = (props) => {
  const [isAdd, setIsAdd] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    setIsAdd(true);
  };
  const closeHandler = (event) => {
    event.preventDefault();
    setIsAdd(false);
  };

  return (
    <div className={styles.form}>
      <button onClick={clickHandler}>ADD</button>
      {isAdd && <AddItemModal onClose={closeHandler} {...props} />}
    </div>
  );
};

export default MealAddButton;
