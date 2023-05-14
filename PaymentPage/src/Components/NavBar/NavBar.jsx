import React from "react";
import Logo from '../../assets/EDYODA.svg';
import Vector from '../../assets/Vector.svg'
import SearchLogo from '../../assets/Search Logo.svg';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <img src={Logo} alt="Logo" width='110px'/>
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link">
            Courses &nbsp; <img src={Vector} alt="Vector"/>
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link">
            Programs &nbsp; <img src={Vector} alt="Vector"/>
            </a>
          </li>
        </ul>

{/* Right side Navbar section */}
        <ul className="navbar-nav_right">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <img src={SearchLogo} alt="Logo" width='15px'/>
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link">
            Log in
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link">
            <span className="JoinBtn">JOIN NOW</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
