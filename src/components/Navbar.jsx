import React from "react";
import "./Navbar.css";
import SailuBakes from "../../public/images/SailuBakes.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={SailuBakes} alt="" className="logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li>Home-page</li>
          <li>About-Us</li>
          <li>Products</li>
          <li>Services</li>
          <li>Contact-us</li>
        </ul>
        <h1>Sailu's Bakes</h1>
      </div>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src="" alt="" className="toggle-icon" />
      </div>
    </div>
  );
};

export default Navbar;
