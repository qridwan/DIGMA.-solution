import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import brandLogo from '../../../Images/brandLogo.jpg';
const Navigation = () => {
    return (
    <Navbar bg="" expand="lg">
  <Navbar.Brand href="#home">
      DIGMA Solution</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigation;