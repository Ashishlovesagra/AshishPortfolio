import { FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section section-bg overflow-hidden pos-relative">
      <div className="footer-inner-shape-top-left" />
      <div className="footer-inner-shape-top-right" />
      <div className="footer-center section-gap-tb-165">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-n5">
            {/* Contact Information */}
            <div className="col-auto mb-5">
              <div className="footer-single-info">
                <Link to="tel:+919911568866" className="info-box">
                  <span className="icon"><FaPhoneAlt /></span>
                  <span className="text">+91 9911568866</span>
                </Link>
              </div>
            </div>
            <div className="col-auto mb-5">
              <div className="footer-single-info">
                <Link to="mailto:ashishsingh2k18@gmail.com" className="info-box">
                  <span className="icon"><FaEnvelopeOpenText /></span>
                  <span className="text">ashishsingh2k18@gmail.com</span>
                </Link>
              </div>
            </div>
            {/* Social Links */}
            <div className="col-auto mb-5">
              <div className="footer-single-info">
                <ul className="social-link">
                  <li>
                    <Link to="https://www.linkedin.com/in/ashish-singh-10sep" target="_blank">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/singh.ashish1009?igsh=MXN6b21hMG00MWc4Ng==" target="_blank">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/SinghAshish009" target="_blank">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center flex-column-reverse flex-md-row">
            <div className="col-auto">
              <div className="footer-copyright">
                <p className="copyright-text">
                  © 2024 <Link to="">Design by Ashish Singh</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
