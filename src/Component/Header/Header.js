import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/UseAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="title ">Happy Tour</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/addservice">
                AddService
              </Nav.Link>
              <Nav.Link as={HashLink} to="/manageorder">
                ManageOrder
              </Nav.Link>

              {user?.email ? (
                <button onClick={logOut} className="btn btn-warning">
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Sign in
                </Nav.Link>
              )}
              <span className="text-danger mt-2 ms-2">{user?.displayName}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
