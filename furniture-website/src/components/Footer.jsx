import React from "react";
import { FaYoutube, FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

import furnitureIcons from "../assets/images/furniture-icons.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid footer-bg-gradient">
        <div className="container py-4 footer-inner-container d-flex align-items-center">
          <div className="row g-4 footer-content-row w-100">
            {/* Column 1: Logo and Furniture Icons */}
            <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
              <div className="footer-logo-circle mb-2">
                {" "}
                <span className="footer-logo-text">Furniture Casino</span>
              </div>

              {/* Image using the imported variable */}
              <img
                src={furnitureIcons}
                alt="Furniture Icons"
                className="img-fluid footer-furniture-icons"
              />
            </div>

            {/* Column 2: About Us */}
            <div className="col-6 col-md-2">
              <h5 className="footer-heading mb-3">About Us</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#who-we-are" className="footer-link">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#our-mission" className="footer-link">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="footer-link">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#success-stories" className="footer-link">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="col-6 col-md-2">
              <h5 className="footer-heading mb-3">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#browse" className="footer-link">
                    Browse
                  </a>
                </li>
                <li>
                  <a href="#products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="footer-link">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#blog" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="col-12 col-md-5 d-flex justify-content-between align-items-start">
              <div className="d-flex flex-column contact-info-wrapper contact-col-half">
                <h5 className="footer-heading mb-3">Contact & Social</h5>
                <p className="footer-contact-info">
                  123 saik Street, Chennai, TN
                </p>
                <p className="footer-contact-info">+91-7907980-688</p>
                <p className="footer-contact-info mb-4">
                  furniturecasino@email.com
                </p>

                <p className="footer-copyright mb-2">
                  © 2025 Furniture casino. All rights reserved.
                </p>
                <p className="footer-terms-privacy">
                  <a href="#terms" className="footer-link">
                    Terms & Conditions
                  </a>{" "}
                  |{" "}
                  <a href="#privacy" className="footer-link">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="d-flex flex-column align-items-end social-media-wrapper social-col-half">
                <h5 className="footer-heading mb-3">Follow Us On :</h5>
                <div className="footer-social-icons">
                  <a href="#youtube" className="social-icon-link me-3">
                    <FaYoutube />
                  </a>
                  <a href="#google" className="social-icon-link me-3">
                    <FaGoogle />
                  </a>
                  <a href="#twitter" className="social-icon-link me-3">
                    <FaTwitter />
                  </a>
                  <a href="#facebook" className="social-icon-link">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
