import React from "react";
import "./Foooter.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h3>Your Travel Journey Starts Here</h3>
          <p>Sign up and we'll send the best deals to you</p>
        </div>
        <div className="banner-input">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
