// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../assets/images/logo1.png";

// Icons
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// ---------------

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={logo} alt="Leelavati Automation" />
        </div>

        <div className="footer-mail">
          <a href="mailto:hello@site.com">manoj@leelavati.com</a><br />
          <a href="mailto:leelavatiautomation@gmail.com">leelavatiautomation@gmail.com</a>
        </div>

        <div className="footer-phone">
          <a href="tel:9820062906">+91 9820062906 | </a>
          <a href="tel:9372355842">+91 9372355842</a>
        </div>

        <div className="social-holder">
          <a href="https://x.com/lapl5">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/leelavatiautomation/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.youtube.com/@leelavatiautomationplc5732">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className="copyright-holder">
          © {new Date().getFullYear()}{" "}
          <a href="/">Leelavati Automation Pvt. Ltd.</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
