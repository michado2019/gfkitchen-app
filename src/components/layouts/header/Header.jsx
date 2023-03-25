import React from "react";
import { Link } from 'react-router-dom'
import menuIcon from './assets/menu_FILL0_wght400_GRAD0_opsz48.png' 
import cancelIcon from './assets/cancel--icon.png' 
import "./Header.css";
const Header = ({display, setDisplay}) => {

    //handlers
    const handleSmallScreenNavDisplay = () => {
        setDisplay(prev => !prev)
    }
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
        <div className="headerMenu-icon_div">
            {
                display ? 
         <img src={cancelIcon} alt='menuImg' className='headerMenu-icon' onClick={handleSmallScreenNavDisplay}/> :
         <img src={menuIcon} alt='menuImg' className='headerMenu-icon' onClick={handleSmallScreenNavDisplay}/>
            }
        </div>
      </nav>
    </div>
  );
};
export default Header;