import chefsImage1 from "./assets/chefs-mario-and-adrian_b.jpg";
import chefsImage2 from "./assets/chefs-mario-and-adrian_a.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="container grid about">
      <div className="about-description">
        <h1>Little Lemon</h1>
        <h2>Toronto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
      <div className="about-chefs">
        <img src={chefsImage1} alt="Chefs together" />
        <img src={chefsImage2} alt="Chefs together again" />
      </div>
    </section>
  );
};

export default About;
