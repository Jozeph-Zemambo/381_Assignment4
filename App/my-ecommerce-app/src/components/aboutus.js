// src/components/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
      <h1>Customer Reviews</h1>
      {/* Insert customer reviews here */}
    </div>
  );
}

export default AboutUs;