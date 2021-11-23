import React from 'react';

// react-bootstrap UI
import { Navbar, Nav, Container } from 'react-bootstrap';

// logo img
import img from "../../../public/logo.png"


export function Topbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center" style={{ fontFamily: 'Montserrat', fontWeight: 700, color: "rgb(149,149,149)" }}>
          <img
            src={img}
            height="60"
            width="60"
            className="d-inline-block align-top"
            alt="AvengersFlix logo"
          />vengersFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home" style={{ fontSize: "19px" }}>Home</Nav.Link>
            <Nav.Link href="#link" style={{ fontSize: "19px" }}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}