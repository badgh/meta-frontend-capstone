import { Link } from "react-router-dom";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpg";
import "./WeekSpecials.css";
import pages from "../../../utils/pages";
import FoodCard from "./FoodCard";

const food = [
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$3.00",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptate blanditiis vero. Ullam praesentium numquam molestiae? Quaerat necessitatibus blanditiis amet obcaecati doloribus aliquam architecto, quod eum ducimus eos fuga!`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$11.99",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptate blanditiis vero. Ullam praesentium numquam molestiae?`,
  },
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$7.99",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptate blanditiis vero. Ullam praesentium numquam molestiae? Quaerat necessitatibus blanditiis amet obcaecati doloribus aliquam architecto!`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>Limited-Time Weekly Specials!</h2>
        <Link className="button-primary" to={pages.get("orderOnline").path}>
          Online Menu
        </Link>
      </div>
      {food.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </section>
  );
};

export default WeekSpecials;
