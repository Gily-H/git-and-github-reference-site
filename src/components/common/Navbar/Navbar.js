import React from "react";
import "./Navbar.css";

import { NavItem, NavBanner } from ".";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavBanner />
        <ul className="nav-list">
          <NavItem path="/" text="Home" />
          <NavItem path="presentation" text="Presentation" />
          <NavItem path="resources" text="Resources" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
