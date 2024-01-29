import React from "react";
import "./contact.scss";
import { Facebook, Google, Instagram, Twitter,Pinterest } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
            <span><Facebook/></span>
            <span><Instagram/></span>
            <span><Twitter/></span>
            <span><Google/></span>
            <span><Pinterest/></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
