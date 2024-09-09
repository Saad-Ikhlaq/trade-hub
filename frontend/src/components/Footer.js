// src/Footer.js

import React from "react";
import "../screens/Contactus.css";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="footer-content1">
        <div className="footer-section1 about1">
          <h2 className="footer-title1">About Us</h2>
          <p>
            We are a company dedicated to providing the best services and
            products to our customers. Our team works tirelessly to ensure
            customer satisfaction.
          </p>
        </div>
        <div className="footer-section1 links1">
          <h2 className="footer-title1">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="footer-link1">
                Home
              </a>
            </li>
           
            <li>
              <a href="/faq" className="footer-link1">
                Frequently asked questions
              </a>
            </li>
            <li>
              <a href="/contactus" className="footer-link1">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section1 contact1">
          <h2 className="footer-title1">Contact Us</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Street, City, Country
          </p>
          <p>
            <i className="fas fa-phone"></i> +123 456 7890
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@company.com
          </p>
        </div>
      </div>
      <div className="footer-bottom1">
        &copy; 2024 Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
