import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

import { useAuth0 } from "../Auth0Wrapper";

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            trips
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            {isAuthenticated ? (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">
                    Counter
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">
                    Fetch data
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/create">
                    Create trip
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/trips">
                    Trips
                  </NavLink>
                </NavItem>
                <NavItem>
                  <button className="btn btn-danger" onClick={() => logout()}>
                    Log Out
                  </button>
                </NavItem>
              </ul>
            ) : (
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <button
                    className="btn btn-success"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </NavItem>
              </ul>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
