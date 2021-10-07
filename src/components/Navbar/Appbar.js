import React from 'react';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import './Appbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Appbar() {
  const {pathname} = useLocation();

  return (
    <Navbar bg="primary" className="Appbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Blogs</Navbar.Brand>
        {
          pathname !== '/' 
          &&
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/blog">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-blog">Add Blog</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </Nav>
        }
      </Container>
    </Navbar>
  )
}

export default Appbar;
