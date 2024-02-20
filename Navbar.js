// Navbar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">
          <FaHome className="mr-1" />
          Home
        </Nav.Link>
        <Nav.Link href="#user">
          <FaUser className="mr-1" />
          User
        </Nav.Link>
        <Nav.Link href="#settings">
          <FaCog className="mr-1" />
          Settings
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
