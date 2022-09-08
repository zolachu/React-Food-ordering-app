import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const index = state.items.findIndex((item) => item.id === action.item.id);
    let updatedItems;
    if (index === -1) {
      updatedItems = state.items.concat(action.item);
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount += action.item.amount;
    }
    return { items: updatedItems, totalAmount: newTotalAmount };
  } else if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);

    let updatedItems = [...state.items];
    let updatedItem = updatedItems[index];
    const newTotalAmount = state.totalAmount - updatedItem.price;

    if (updatedItem.amount === 1) {
      updatedItems.splice(index, 1);
    } else {
      updatedItem.amount--;
    }
    return { items: updatedItems, totalAmount: newTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
