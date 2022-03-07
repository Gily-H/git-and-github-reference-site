import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="nav-link">
      <Link to={props.path}>{props.text}</Link>
    </li>
  );
};

export default NavItem;
