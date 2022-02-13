import React, { Component } from 'react';
import logo from '../assets/img/fevicon.png'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Button from 'react-bootstrap/Button'

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          {/* Brand and Brand Logo */}
          <Navbar.Brand href="#home" className='text-warning'>
            <img
              alt="Brand Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            VELETO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className='mx-3 text-warning' href="#home">Home</Nav.Link>
              <Nav.Link className='mx-3' href="#about">AboutUs</Nav.Link>
              <NavDropdown className='mx-3' title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Velvet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Paper</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wooden</NavDropdown.Item>
              </NavDropdown>              
              <Nav.Link className='mx-3' href="#contact">Contact</Nav.Link>
            </Nav>  
            <Nav className='me'>
              <Button className='mx-5 px-2' variant="warning">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )					
  }
}					
