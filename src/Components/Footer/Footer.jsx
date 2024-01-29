import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
        
            <span>FAQ</span>
            <span>Page</span>
            <span>Store</span>
            <span>Compare</span>
            <span>Cookies</span>
         
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            minima deleniti earum expedita temporibus minus veniam sint. Animi
            quas tempora perspiciatis quis voluptatem vitae esse nam, et fuga
            repudiandae repellat!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            minima deleniti earum expedita temporibus minus veniam sint. Animi
            quas tempora perspiciatis quis voluptatem vitae esse nam, et fuga
            repudiandae repellat!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">RHstore</span>
          <span className="copyright">
            &#169; Copyright 2024,All Rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
