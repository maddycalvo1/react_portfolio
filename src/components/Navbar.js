import React from "react";
import {Nav, NavLink, Bars, NavMenu} from './NavBarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Home</h1>
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
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;