import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./FoodCard.css";
import pages from "../../../utils/pages";

const FoodCard = ({ food }) => {
  return (
    <article className="food-card">
      <div className="food-card-image">
        <img src={food.image} alt={food.name} />
      </div>
      <div className="food-card-header">
        <h3>{food.name}</h3>
        <span>{food.price}</span>
      </div>
      <div className="food-card-body-footer">
        <p>{food.description}</p>
        <Link to={pages.get("orderOnline").path}>
          Order a delivery <FontAwesomeIcon icon={faCar} />
        </Link>
      </div>
    </article>
  );
};

export default FoodCard;
