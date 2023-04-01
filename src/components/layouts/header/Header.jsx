import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "./assets/menu_FILL0_wght400_GRAD0_opsz48.png";
import cancelIcon from "./assets/cancel--icon.png";
import servicesData from "./headerData/HeaderData";
import { aboutUsData } from "./headerData/HeaderData";
import "./Header.css";
const Header = ({ display, setDisplay }) => {
  //States
  const [switcher, setSwitcher] = useState(false);
  const [switcherTwo, setSwitcherTwo] = useState(false);
  //handlers
  const handleSmallScreenNavDisplay = () => {
    setDisplay((prev) => !prev);
  };
  const handleSwitch = () => {
    setSwitcher((prev) => !prev);
  };
  const handleSwitchTwo = () => {
    setSwitcherTwo((prev) => !prev);
  };
  return (
    <div className="headerWrapper">
      <nav className="headerNav">
        <div className="headerLogo-div">
          <Link to="/" className="headerLogo-link">
            <h2 className="headerLogo">GF</h2>
            <h2 className="headerLogo-text">Kitchen</h2>
          </Link>
        </div>
        <ul className="headerNav-flex">
          <li className="headerNav-links">
            <Link to="/" className="headerLink">
              Home
            </Link>
          </li>
          <li className="headerNav-links">
            <div className="headerNav-links_flex">
              <h4 className="headerHome-links" onClick={handleSwitch}>
                About us
              </h4>
              {switcher ? (
                <h4 className="headerSwitch">{1}</h4>
              ) : (
                <h4 className="headerSwitch">{0}</h4>
              )}
            </div>
            <div
              className="headerAbout-us_lists"
              onMouseLeave={handleSwitch}
              style={{
                marginLeft: switcher ? "" : "-50px",
                opacity: switcher ? 1 : 0, display: switcher ? 'flex' : 'none',
                transition: "all 0.5s",
              }}
            >
              <div className="headerAbout-us_list">
                <h4 className="headerAbout-lists_title">About GFkitchen:</h4>
                <a href="#about" className="headerAbout-us_list">{aboutUsData[0]}</a>
                <Link to="/ourKitchen" className="headerAbout-us_list">{aboutUsData[1]}</Link>
                <Link to="/meetOurMd" className="headerAbout-us_list">{aboutUsData[3]}</Link>
              </div>
            </div>
          </li>
          <li className="headerNav-links">
            <div className="headerNav-links_flex">
              <h4 className="headerHome-links" onClick={handleSwitchTwo}>
                Our services
              </h4>
              {switcherTwo ? (
                <h4 className="headerSwitch">{1}</h4>
              ) : (
                <h4 className="headerSwitch">{0}</h4>
              )}
            </div>
            <div
              className="headerServices-lists"
              onMouseLeave={handleSwitchTwo}
              style={{
                marginLeft: switcherTwo ? "" : "-50px",
                opacity: switcherTwo ? 1 : 0, display: switcherTwo ? 'block' : 'none',
                transition: "all 0.5s",
              }}
            >
              <h4 className="headerServices-lists_title">Services:</h4>
              {servicesData.map((service) => {
                return (
                  <Link to={`perculiarService/${service.id}`} className="headerServices-list" key={service.id}>{service.service}</Link>
                );
              })}
            </div>
          </li>
          <li className="headerNav-links">
            <Link to="/register" className="headerLink">
              Register
            </Link>
          </li>
          <li className="headerNav-links">
            <div>
              <Link to="/logIn" className="headerLink">
                Log-in
              </Link>
            </div>
          </li>
        </ul>
        <div className="headerMenu-icon_div">
          {display ? (
            <img
              src={cancelIcon}
              alt="menuImg"
              className="headerMenu-icon"
              onClick={handleSmallScreenNavDisplay}
            />
          ) : (
            <img
              src={menuIcon}
              alt="menuImg"
              className="headerMenu-icon"
              onClick={handleSmallScreenNavDisplay}
            />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Header;
