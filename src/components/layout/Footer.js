import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import whiteLogo from "./assets/logo-white.png";
import pages from "../../utils/pages";

const contactInfo = [
  { icon: faLocationDot, info: "186 Bartley Dr, North York, ON M4A 1E1" },
  { icon: faPhone, info: "(777) 123-4567" },
  { icon: faEnvelope, info: "info@llemon.com" },
];

const socialNetworks = [
  { icon: faFacebook, name: "Facebook" },
  { icon: faTwitter, name: "Twitter" },
  { icon: faInstagram, name: "Instagram" },
  { icon: faYoutube, name: "Youtube" },
];

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img className="site-footer-logo" src={whiteLogo} alt="Little Lemon" />
        <nav className="site-footer-nav">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contactInfo.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Social links</h4>
          {socialNetworks.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
