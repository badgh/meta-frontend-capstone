import customer1Image from "./assets/happy-client1.jpg";
import customer2Image from "./assets/happy-client2.jpg";
import customer3Image from "./assets/happy-client3.png";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    name: "Andre Perez",
    image: customer1Image,
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente magnam sunt iste, pariatur ea fugit sed. Quidem, ea esse!`,
  },
  {
    name: "Hanna Brown",
    image: customer2Image,
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente magnam sunt iste, pariatur ea fugit sed. Quidem, ea esse!`,
  },
  {
    name: "Jasmine Wright",
    image: customer3Image,
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente magnam sunt iste, pariatur ea fugit sed. Quidem, ea esse!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
