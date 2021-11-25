import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";

const NavPage = () => {
  return (
    <>
  <Navbar fixed='top' bg="light" className='nav_container'>
  <Container className='nav_wrapper  justify-content-left'>
    <Navbar.Brand className = 'nav_logo' href="#main"><h3>PB.</h3></Navbar.Brand>
    <Nav className="nav_items">
    <Nav.Link className="nav_text" href="#main"><h3>Home</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#skills"><h3>Skills</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#portfolio"><h3>Portfolio</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#contact"><h3>Contact</h3></Nav.Link>
    </Nav>
  </Container>
</Navbar>
</>

  );
};

export default NavPage;
