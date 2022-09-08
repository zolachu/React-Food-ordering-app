import React from "react";
import styles from "./MealItem.module.css";
import AddItemButton from "./AddItemButton";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <AddItemButton
          name={props.name}
          price={props.price}
          description={props.description}
          id={props.id}
        />
      </div>
    </li>
  );
};

export default MealItem;
