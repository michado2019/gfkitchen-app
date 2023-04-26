import React from "react";
import "./SmallScreenNav.css";
import { Link } from "react-router-dom";
const SmallScreenNav = ({display, setDisplay}) => {

    //Handlers
    const handleNavClose = () => {
        setDisplay(prev => !prev)
    }
  return (
    <div className="smallScreen-nav_wrapper" style={{marginLeft: display ? '0' : '-1000px', transition: 'all 0.5s'}}>
      <nav className="smallScreen-nav">
        <ul className="smallScreen-nav_flex">
          <li className="smallScreen-nav_links">
            <Link to="/" className="smallScreen-nav_link" onClick={handleNavClose}>
              Home
            </Link>
          </li>
          <li className="smallScreen-nav_links" onClick={handleNavClose}>About us</li>
          <li className="smallScreen-nav_links" onClick={handleNavClose}>Our services</li>
          <li className="smallScreen-nav_links">
            <Link to="/register" className="smallScreen-nav_link" onClick={handleNavClose}>
              Register
            </Link>
          </li>
          <li className="smallScreen-nav_links">
            <div>
              <Link to="/logIn" className="headerLink" onClick={handleNavClose}>
                Log-in
              </Link>
            </div>
          </li>
          <li className="smallScreen-nav_links">
            <div>
              <Link to="/smallScreenSidebar" className="headerLink" onClick={handleNavClose} >
                S-bar
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SmallScreenNav;