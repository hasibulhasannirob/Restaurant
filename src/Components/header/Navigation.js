import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  Nav,
  NavbarToggler,
} from "reactstrap";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">Yellow Restaurant</NavbarBrand>
        <NavbarToggler onClick={navToggle} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/menu">Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
