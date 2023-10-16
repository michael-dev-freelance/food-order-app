import { useContext, useRef } from "react";
import Input from "../../UI/Input";
import CartContext from "../../../Store/CartContext";

const MealItemForm = (props) => {
  const meal = props.meal;
  const amount = useRef();
  const { addItem } = useContext(CartContext);
  const onAddItemHandler = (event) => {
    event.preventDefault();

    addItem({
      ...meal,
      amount: parseInt(amount.current.value),
    });
  };
  return (
    <form className="text-center">
      <Input
        ref={amount}
        label="Amount"
        input={{
          id: meal.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button
          onClick={onAddItemHandler}
          className="text-white rounded-2xl cursor-pointer bg-[#8a2b06] border-2 border-[#8a2b06] border-solid px-4 py-1 font-bold active:bg-[#641e03] active:border-[#641e03]"
        >
          + Add
        </button>
      </div>
    </form>
  );
};
export default MealItemForm;
