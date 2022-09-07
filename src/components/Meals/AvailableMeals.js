import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Oolong Boba Tea",
    description: "Finest fish and veggies",
    price: 4.5,
  },
  {
    id: "m2",
    name: "Sun-Moon Tea",
    description: "A german specialty!",
    price: 5.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 5.5,
  },
  {
    id: "m4",
    name: "Taiwanese Boba",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Oolong Boba Tea",
    description: "Finest fish and veggies",
    price: 4.5,
  },
  {
    id: "m6",
    name: "Oolong Boba Tea",
    description: "Finest fish and veggies",
    price: 4.5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
