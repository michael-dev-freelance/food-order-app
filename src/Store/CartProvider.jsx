import { useReducer } from "react";
import CartContext from "./CartContext";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const stateItems = state.items;
  const actionItem = action.item;
  if (action.type === "ADD") {
    const existedItemIndex = stateItems.findIndex(
      (item) => item.id === actionItem.id
    );
    const existedItem = stateItems[existedItemIndex];
    let updatedItems;
    if (existedItem) {
      const updatedItem = {
        ...existedItem,
        amount: existedItem.amount + actionItem.amount,
      };
      updatedItems = [...stateItems];
      updatedItems[existedItemIndex] = updatedItem;
    } else {
      updatedItems = [...stateItems].concat(actionItem);
    }
    const updatedTotalAmount =
      state.totalAmount + actionItem.price * actionItem.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existedItemIndex = stateItems.findIndex(
      (item) => item.id === action.id
    );
    const existedItem = stateItems[existedItemIndex];
    let updatedItems;
    if (existedItem.amount === 1) {
      updatedItems = [...stateItems].filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...stateItems];
      const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
      updatedItems[existedItemIndex] = updatedItem;
    }
    let updatedTotalAmount = state.totalAmount - existedItem.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
