// src/ContactUs.js

import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="container1">
      <div className="form-wrapper1">
        <h1 className="title1">Contact Us</h1>
        <form>
          <input type="text" className="input1" placeholder="Your Name" required />
          <input type="email" className="input1" placeholder="Your Email" required />
          <textarea className="textarea1" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="button1">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
