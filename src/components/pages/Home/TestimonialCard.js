import "./TestimonialCard.css";

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
