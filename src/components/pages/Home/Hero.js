import { Link } from "react-router-dom";
import restaurantImage from "./assets/restaurant.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon!</h1>
          <h2>Toronto</h2>
          <p>
            Experience the warm embrace of our family-owned Mediterranean
            restaurant, where time-honored recipes meet a contemporary flair.
            Delight in a culinary journey that harmoniously blends tradition
            with innovation, ensuring every bite is a memorable adventure. Join
            us in savoring the essence of the Mediterranean, crafted with love
            and served with a touch of modern magic.
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
