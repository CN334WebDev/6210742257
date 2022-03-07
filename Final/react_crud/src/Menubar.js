import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="menubar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <small class="text-uppercase fs-6 fw-lighter">CRUD</small>{" "}
          <strong class="fw-bold fs-3">Admin</strong>{" "}
          <small class="text-uppercase fs-6 fw-lighter">
            Portfoloio Project
          </small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {"|||||"}
          <Nav>
            <Nav.Link as={Link} eventKey={1} to="/">
              <small class="text-uppercase-end fs-6 fw-light">HISTORY</small>
            </Nav.Link>
            {"|||||"}
            <Nav.Link as={Link} eventKey={2} to="/">
              <small class="text-uppercase fs-6 fw-light">PROJECTS</small>
            </Nav.Link>
            {"|||||"}
            <Nav.Link as={Link} eventKey={3} to="/">
              <small class="text-uppercase fs-6 fw-light">SKILLS</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
