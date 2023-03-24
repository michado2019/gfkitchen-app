import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css";
const Header = () => {
  return (
    <div className="headerWrapper">
      <nav className="headerNav">
        <div className="headerLogo-div">
            <h2 className="headerLogo">GF</h2>
            <h2 className="headerLogo-text">Kitchen</h2>
        </div>
        <ul className="headerNav-flex">
          <li className="headerNav-links"><Link to='/' className="headerLink">Home</Link></li>
          <li className="headerNav-links">About us</li>
          <li className="headerNav-links">Our services</li>
          <li className="headerNav-links"><Link to='/register' className="headerLink">Register</Link></li>
          <li className="headerNav-links">
            <div>
            <Link to='/logIn' className="headerLink">Log-in</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;