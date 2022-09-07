import React, { useState } from "react";
import styles from "./MealItemForm.module.css";
import AddItemModal from "./AddItemModal";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
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
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={clickHandler}>ADD</button>
      {isAdd && <AddItemModal onClose={closeHandler} {...props} />}
    </div>
  );
};

export default MealItemForm;
