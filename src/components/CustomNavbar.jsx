import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar >
        <Navbar.Header>
          <Navbar.Brand href="#home">
            TimeOff.Management
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav className="mr-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#signup">SignUp</Nav.Link>
             <Nav.Link href="#pricing">Pricing</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
