import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const url = "https://mealapp-eb871-default-rtdb.firebaseio.com/data.json";

    async function somethign() {
      setIsLoading(true);

      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    }

    somethign().catch((e) => {
      setIsLoading(false);
      setIsError(e.message);
      console.log(e.message);
    });

    return () => {};
  }, []);

  if (isLoading) {
    return <section className={styles.loading}>Loading...</section>;
  }

  if (isError) {
    return <section className={styles.error}>{isError}</section>;
  }

  const mealsList = Object.entries(data).map((meal) => {
    return (
      <Card>
        <MealItem
          id={meal[0]}
          key={meal[0]}
          name={meal[1].name}
          description={meal[1].description}
          price={meal[1].price}
        />
      </Card>
    );
  });
  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
