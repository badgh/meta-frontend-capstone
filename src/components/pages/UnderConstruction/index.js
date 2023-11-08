import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faWrench} size="3x" />
      <h2>
        We're currently working on this page to make it even better for you!
        Please check back soon for the updated content. Thank you for your
        patience and understanding!
      </h2>
    </div>
  );
};

export default UnderConstruction;
