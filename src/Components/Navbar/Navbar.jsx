import React from "react";
import {
  KeyboardArrowDown,
  SearchOutlined,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import "../../app.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="images/en.png" alt="" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            USD
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">RHSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">HomePage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Store</Link>
          </div>
          <div className="icons">
            <SearchOutlined />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
