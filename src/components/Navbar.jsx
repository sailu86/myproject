import React from "react";
import "./Navbar.css";
import SailuBakes from "../../public/images/SailuBakes.png";
//import { Link, NavLink} from "react-router-dom";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={SailuBakes} alt="" className="logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          {/* <Link to="/">Home</Link> */}
          
          <li><NavLink>Home-page</NavLink></li>
          <li><NavLink>About-Us</NavLink></li>
          <li><NavLink>Products</NavLink></li>
          <li><NavLink>Services</NavLink></li>
          <li><NavLink>Contact-us</NavLink></li>
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
