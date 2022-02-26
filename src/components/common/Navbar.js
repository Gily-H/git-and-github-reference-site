import React from "react";
import { Link } from "react-router-dom";
import "../../styles/common/Navbar.css";

const NavBanner = () => {
  return (
    <div className="banner">
      <Link to="/">Git & GitHub</Link>
    </div>
  );
};

const NavItem = (props) => {
  return (
    <li className="nav-link">
      <Link to={props.path}>{props.text}</Link>
    </li>
  );
};

// const SubNav = () => {
//   return <div className="subnav">Hello</div>;
// };

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
