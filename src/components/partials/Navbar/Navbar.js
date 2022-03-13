import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { NavItem, NavBanner } from ".";

const Navbar = () => {
  const [burgerDisplay, setBurgerDisplay] = useState(false);

  useEffect(() => {
    
  }, [])

  const burgerHandler = () => {
    setBurgerDisplay((prevBurgerDisplay) => !prevBurgerDisplay);
  };



  return (
    <>
      <nav className="navbar">
        <NavBanner />
        <ul className={`nav-list ${burgerDisplay && "nav-display"}`}>
          <NavItem path="/" text="Home" />
          <NavItem path="presentation" text="Presentation" />
          <NavItem path="resources" text="Resources" />
        </ul>
        <div className="burger-menu" onClick={burgerHandler}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
