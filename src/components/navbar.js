import React, { Component } from "react";
import logo from "../assets/img/favicon.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import House from "./house";
import Plot from "./plot";
import Apartment from "./apartment";
import Login from "./login";

export class NavigationBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            {/* Brand and Brand Logo */}
            <Navbar.Brand as={Link} to="/" className="text-warning">
              <img
                alt="Brand Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              SINGH BUILDERS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link as={Link} className="active mx-3" to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} className="mx-3" to="/about">
                  AboutUs
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Properties"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/house">
                    House
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/apartment">
                    Apartment
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/plot">
                    Residential Plot
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} className="mx-3" to="contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav as={Link} to="/login" className="me text-decoration-none">
                <Button className="mx-lg-5 mx-md-3 px-2" variant="warning">
                  Login
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/house" element={<House />} />
            <Route path="/plot" element={<Plot />} />
            <Route path="/apartment" element={<Apartment />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
