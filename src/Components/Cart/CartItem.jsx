import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const CartItem = (props) => {
  const { addItem, removeItem } = useContext(CartContext);

  const item = props.item;
  const price = `$${item.price.toFixed(2)}`;
  const onAddHandler = (event) => {
    event.preventDefault();
    addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (event) => {
    event.preventDefault();
    removeItem(item.id);
  };
  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-[#8a2b06] py-4 my-4">
      <div>
        <h2 className="text-[#363636] mb-2 text-2xl font-bold">{item.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-[#8a2b06]">{price}</span>
          <span className="font-bold border-solid border-2 border-[#ccc] px-3 rounded-md text-[#363636]">
            {"x "}
            {item.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          className="font-bold text-xl text-[#8a2b06] border-[#8a2b06] border-2 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white"
          onClick={onRemoveHandler}
        >
          −
        </button>
        <button
          className="font-bold text-xl text-[#8a2b06] border-[#8a2b06] border-2 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white"
          onClick={onAddHandler}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
