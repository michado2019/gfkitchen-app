import React from "react";
import "./SmallScreenNav.css";
import { Link } from "react-router-dom";
const SmallScreenNav = () => {
  return (
    <div className="smallScreen-nav_wrapper">
      <nav className="smallScreen-nav">
        <ul className="smallScreen-nav_flex">
          <li className="smallScreen-nav_links">
            <Link to="/" className="smallScreen-nav_link">
              Home
            </Link>
          </li>
          <li className="smallScreen-nav_links">About us</li>
          <li className="smallScreen-nav_links">Our services</li>
          <li className="smallScreen-nav_links">
            <Link to="/register" className="smallScreen-nav_link">
              Register
            </Link>
          </li>
          <li className="smallScreen-nav_links">
            <div>
              <Link to="/logIn" className="headerLink">
                Log-in
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SmallScreenNav;
