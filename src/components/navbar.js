import React, { Component } from 'react';
import '../assets/css/custom.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

export class NavigationBar extends Component {
  render() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='navbar-container'>
                    <Navbar.Brand href="#home">
                        VELETO
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="velvet">Velvet</NavDropdown.Item>
                            <NavDropdown.Item href="paper">Paper</NavDropdown.Item>
                            <NavDropdown.Item href="wooden">Wooden</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )					
  }
}					
