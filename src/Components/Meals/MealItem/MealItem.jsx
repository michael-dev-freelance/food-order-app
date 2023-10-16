import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const meal = props.meal;
  return (
    <li className="flex justify-between m-4 pb-4 border-b-1 border-b-[#ccc]">
      <div>
        <h3 className="font-bold">{meal.name}</h3>
        <div className="italic">{meal.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">
          ${meal.price.toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
};
export default MealItem;
