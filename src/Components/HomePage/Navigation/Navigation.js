import React from "react";
import { Image, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar
      style={{ backgroundImage: "linear-gradient(700deg, #FF5B7D, #F9C227)" }}
      bg=""
      expand="md"
      sticky="top"
    >
      <Navbar.Brand href="#home">
        <Link to="/" className="link font-weight-bolder"> DIGMA. Solution</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <ul className="list-unstyled d-flex">
            <li>
              <Link className="link mr-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="link mr-4" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
