import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/Logo.png";
import { StyledLogo, StyledNavLink } from "../styles/Navbar";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <StyledLogo src={logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <StyledNavLink>Home</StyledNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-links" onClick={closeMobileMenu}>
              <StyledNavLink>Recipes</StyledNavLink>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/my-recipes" className="nav-links" onClick={closeMobileMenu}>
              <StyledNavLink>My Recipes</StyledNavLink>
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              <StyledNavLink>
                <i className="fas fa-user-circle"></i> <i className="fas fa-caret-down" />
              </StyledNavLink>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              <StyledNavLink>Sign Up</StyledNavLink>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
