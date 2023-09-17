import React from "react";
import logo from "../assets/bharatjury.svg";
import logotxt from "../assets/bharatjurytxt.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <img className="logo" src={logo} alt="" />
        <img className="txt" src={logotxt} alt="" />
      </div>
      <div className="options">
        <p>About Us</p>
        <p>Products</p>
        <p>Resources</p>
        <p>Contact Us</p>
      </div>
    </nav>
  );
};

export default Navbar;
