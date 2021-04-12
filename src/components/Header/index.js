import React from "react";
import "./style.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__titles">
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Training</p>
        <p>Event</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Header;
