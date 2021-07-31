import React from 'react'
// import { Button } from '@material-ui/core';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

export default function header(expand) {
    
    return (
        <div>

<Navbar collapseOnSelect expand="lg" bg="pink" variant="light">
  <Container>
  <Navbar.Brand href="/">IL CandyShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#CandyPage">Candys</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#About/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Signout</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      Cart
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
