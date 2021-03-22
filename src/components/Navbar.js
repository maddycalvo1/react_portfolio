import React from "react";

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
          <NavMenu>
          <NavLink to="/Projects" activeStyle>
            Projects
          </NavLink>
          <NavMenu>
          <NavLink to="/Resume" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;