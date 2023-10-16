import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and eggs.",
    price: 12.99,
  },
  {
    id: "m6",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato and mozzarella.",
    price: 10.99,
  },
  {
    id: "m7",
    name: "Sushi Platter",
    description: "Assorted sushi rolls and sashimi.",
    price: 24.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className="max-w-60rem w-90% m-auto animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
