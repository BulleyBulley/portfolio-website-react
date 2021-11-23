import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container,NavDropdown, Nav} from "react-bootstrap";

const NavPage = () => {
  return (
    <>
  <Navbar fixed='top' bg="light" expand="lg" className='nav_container'>
  <Container className='nav_wrapper'>
    <Navbar.Brand className = 'nav_logo' href="#main"><h3>PB.</h3></Navbar.Brand>
    <Nav className="nav-items">
    <Nav.Link className="nav_text" href="#main"><h3>Home</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#about"><h3>About</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#portfolio"><h3>Portfolio</h3></Nav.Link>
    <Nav.Link className="nav_text" href="#contact"><h3>Contact</h3></Nav.Link>
    </Nav>
  </Container>
</Navbar>
</>

    // <nav className="nav_container">
    //     <div class="nav_wrapper">
    //     <div class="nav_logo">
    //                <h3> PB. </h3>
    //             </div>

    //     <div class ="nav-items">
    //   <Link className="nav_text" to="/">
    //     home
    //   </Link>
    //   <Link className="nav_text" to="/post">
    //     about
    //   </Link>
    //   <Link className="nav_text" to="/portfolio">
    //     portfolio
    //   </Link>
    //   <Link className="nav_text" to="/post">
    //     contact
    //   </Link>
    //   </div>
    //   </div>
    // </nav>
  );
};

export default NavPage;
