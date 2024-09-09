// src/FAQ.js

import React, { useState } from 'react';
import './Contactus.css';

const faqData = [
  { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay." },
  { question: "How do I track my order?", answer: "You can track your order using the tracking link provided in your order confirmation email." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy on all items. Please visit our Returns page for more information." },
  { question: "How do I cancel my order?", answer: "To cancel your order, please contact our customer service team as soon as possible." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location." },
  { question: "How can I contact customer service?", answer: "You can contact our customer service team via email at support@ecommerce.com or by phone at +123 456 7890." },
  { question: "How do I create an account?", answer: "To create an account, click on the 'Sign Up' button at the top of the page and fill in the required information." },
  { question: "Can I change my shipping address after placing an order?", answer: "If you need to change your shipping address, please contact our customer service team as soon as possible." },
  { question: "What do I do if I receive a damaged item?", answer: "If you receive a damaged item, please contact our customer service team immediately to arrange a return or exchange." },
  { question: "How do I apply a discount code?", answer: "You can apply a discount code at checkout. Enter the code in the 'Discount Code' field and click 'Apply'." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container1">
      <h1 className="faq-title1">Frequently Asked Questions</h1>
      <div className="faq-content1">
        {faqData.map((item, index) => (
          <div className="faq-item1" key={index}>
            <button className="faq-question1" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            <div className={`faq-answer1 ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
