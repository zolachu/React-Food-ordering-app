import styles from "./AddItemModal.module.css";
import Modal from "../../UI/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../../UI/Input";
import { useState, useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";

const AddItemModal = (props) => {
  const Context = useContext(CartContext);

  const amountInputRef = useRef();
  const [amount, setAmount] = useState(1);

  const decrementAmountHandler = () => {
    setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : prevAmount));
  };

  const incrementAmountHandler = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const changeHandler = (event) => setAmount(event.target.value);

  const addItemsHandler = () => {
    const enteredAmount = amountInputRef.current.value;

    const item = {
      name: props.name,
      id: props.id,
      amount: +enteredAmount,
      price: props.price,
      key: props.id,
    };
    Context.addItem(item);
    console.log(
      `added ${enteredAmount} many items of ${props.name} ${props.id}`
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <div>{props.name}</div>
          <CloseIcon onClick={props.onClose} />
        </div>

        <div className={styles.modal__footer}>
          <div className={styles.modal__amount}>
            <RemoveCircleOutlineIcon onClick={decrementAmountHandler} />
            <Input
              ref={amountInputRef}
              input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "10",
                step: "1",
              }}
              onChange={changeHandler}
              value={amount}
            />
            <AddCircleOutlineIcon onClick={incrementAmountHandler} />
          </div>

          <div onClick={props.onClose}>
            <button onClick={addItemsHandler}>
              ADD TO CART - ${props.price * amount}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddItemModal;
