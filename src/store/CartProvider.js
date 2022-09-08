import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return { items: updatedItems, totalAmount: newTotalAmount };
  }
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
