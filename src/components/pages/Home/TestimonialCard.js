import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TestimonialCard.css";

const ratingLevels = { 0.5: faStarHalfStroke, 1: faStar };

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.name} />
      <h4>{customer.name}</h4>
      <blockquote>
        <p>"{customer.quote}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;
