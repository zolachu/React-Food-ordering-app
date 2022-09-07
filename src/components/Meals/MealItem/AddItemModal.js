import styles from "./AddItemModal.module.css";
import Modal from "../../UI/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../../UI/Input";
import { useState } from "react";

const AddItemModal = (props) => {
  const [count, setCount] = useState(1);

  const deleteHandler = (event) => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        // props.onPriceDelete((prevCount - 1) * props.price);
        return prevCount - 1;
      }
      if (prevCount === 0) return prevCount;
    });
  };

  const addHandler = (event) => {
    setCount((prevCount) => {
      // props.onPriceAdd((prevCount + 1) * props.price);
      return prevCount + 1;
    });
  };

  const changeHandler = (event) => {
    setCount(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <div>{props.name}</div>
          <div>Total Price ${props.price * count}</div>

          <span onClick={props.onClose}>
            <CloseIcon />
          </span>
        </div>

        <div className={styles.modal__footer}>
          <span onClick={deleteHandler}>
            <RemoveCircleOutlineIcon />
          </span>

          <Input
            label="Amount"
            input={{
              id: "amount",
              type: "number",
              min: "1",
              max: "10",
              step: "1",
            }}
            onChange={changeHandler}
            value={count}
          />

          <span onClick={addHandler}>
            <AddCircleOutlineIcon />
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default AddItemModal;
