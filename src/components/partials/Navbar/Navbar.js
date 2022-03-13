import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { NavItem, NavBanner } from ".";

const Navbar = () => {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

  useEffect(() => {
    const hideBurgerMenu = () => {
      if (displayBurgerMenu && window.innerWidth > 768) {
        setDisplayBurgerMenu(false);
      }
    };

    window.addEventListener("resize", hideBurgerMenu);
    return () => window.removeEventListener("resize", hideBurgerMenu);
  }, []);

  const burgerHandler = () => {
    setDisplayBurgerMenu((prevBurgerDisplay) => !prevBurgerDisplay);
  };

  return (
    <>
      <nav className="navbar">
        <NavBanner />
        <ul className={`nav-list ${displayBurgerMenu && "nav-display"}`}>
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
