import React from "react";
import {Nav, NavLink, Bars, NavMenu} from './NavBarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/Resume" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;