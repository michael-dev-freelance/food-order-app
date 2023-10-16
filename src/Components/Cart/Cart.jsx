import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  const cartItemsJSX =
    items.length > 0 ? (
      <ul className="list-none m-0 p-0 overflow-auto max-h-80">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    ) : (
      <p className="font-bold text-[#8a2b06] text-center p-10">
        There's nothing in the cart.
      </p>
    );
  return (
    <>
      <Modal onShowCart={props.onShowCart}>
        {cartItemsJSX}
        {items.length > 0 ? (
          <div className="flex justify-between items-center font-bold text-2xl mt-2">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        ) : (
          ""
        )}

        <div className="text-right mt-2">
          <button
            className="text-[#8a2b06] border-2 border-solid border-[#8a2b06] rounded-3xl px-8 py-2"
            onClick={() => props.onShowCart(false)}
          >
            Close
          </button>
          <button
            className=" cursor-pointer bg-[#8a2b06] border-2 border-solid border-[#8a2b06] px-8 py-2 rounded-3xl ml-4  text-white
          hover:bg-[#5a1a01] hover:border-[#5a1a01] 
          active:bg-[#5a1a01] active:border-[#5a1a01] "
          >
            Order
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Cart;
