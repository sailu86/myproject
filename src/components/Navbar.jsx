import React from "react";
import "./Navbar.css";
import SailuBakes from "../../public/images/SailuBakes.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={SailuBakes} alt="" className="logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          {/* <Link to="/">Home</Link> */}
          
          <li><Link>Home-page</Link></li>
          <li><Link>About-Us</Link></li>
          <li><Link>Products</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Contact-us</Link></li>
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
