import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavPage = () => {
  return (
    <>
      <Navbar fixed="top" bg="light" className="nav_container">
        <Container className="nav_wrapper  justify-content-left">
          <Navbar.Brand className="nav_logo" href="#main">
            <h3>PB.</h3>
          </Navbar.Brand>
          <Nav className="nav_items">
            <Nav.Link
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              href="#main"
            >
              <div data-to-scrollspy-id="main">
                <h3>Home</h3>
              </div>
            </Nav.Link>
            <Nav.Link
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              href="#skills"
            >
              <div data-to-scrollspy-id="skills">
                <h3>Skills</h3>
              </div>
            </Nav.Link>
            <Nav.Link
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              href="#portfolio"
            >
              <div data-to-scrollspy-id="portfolio">
                <h3>Portfolio</h3>
              </div>
            </Nav.Link>
            <Nav.Link
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              href="#contact"
            >
              <div data-to-scrollspy-id="contact">
                <h3>Contact</h3>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPage;
