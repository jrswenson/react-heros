import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/heroes" activeStyle={activeStyle}>
        Heroes
      </NavLink>
      {" | "}
      <NavLink to="/villains" activeStyle={activeStyle}>
        Villains
      </NavLink>
    </nav>
  );
}

export default Header;
