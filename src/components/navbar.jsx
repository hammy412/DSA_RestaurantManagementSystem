import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar(){
    return (
        <Navbar fixed="top" expand="lg" bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href="#">Jang's International Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#footer">Contact Us</Nav.Link>
            <Nav.Link href="#">Reservations</Nav.Link>
            <Nav.Link href="#">Customer Login</Nav.Link>
            <Nav.Link href="#">Staff Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}