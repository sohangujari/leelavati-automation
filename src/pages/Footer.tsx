// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data
import contactData from "../data/contact.json";

// Images
import logo from "../assets/images/logo2.png";

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

        {/* <div className="footer-mail">
          <a href="mailto:hello@site.com">manoj@leelavati.com</a><br />
          <a href="mailto:leelavatiautomation@gmail.com">leelavatiautomation@gmail.com</a>
        </div> */}

        {/* <div className="footer-phone">
          <a href="tel:9820062906">+91 9820062906 | </a>
          <a href="tel:9372355842">+91 9372355842</a>
        </div> */}

        <div className="footer-mail">
            {contactData.contactInfo.map((info, i) => (
              <div key={"contact-info-" + i} className="info-code">
                <p className="info-code-title">{info.title}</p>
                <p className="info-code-content">
                  {info.link ? (
                    Array.isArray(info.link) ? (
                      info.link.map((item, index) => (
                        <a key={index} href={item.to}>{item.text}<br /></a>
                      ))
                    ) : (
                      <a href={info.link.to}>{info.link.text}</a>
                    )
                  ) : (
                    info.value
                  )}
                </p>
              </div>
            ))}
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
