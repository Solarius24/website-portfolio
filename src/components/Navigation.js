import React from "react";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" expand="md" className="px-3">
      <Navbar.Text className="text-white">codewars</Navbar.Text>
      <Image src=" https://www.codewars.com/users/Solarius24/badges/micro" />
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler ms-auto bg-warning"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5">
            <Nav.Link className="text-white px-4" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white px-4" href="/about_me">
              About Me
            </Nav.Link>
            <Nav.Link className="text-white px-4" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-white px-4" href="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
