import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import * as Icon from 'react-feather'

const Navbars = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >Welcome to Warbug Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              <Nav.Link as= {Link} to="/cart"><div className="carrito-icon"><Icon.ShoppingCart className="icon wh-15" /></div></Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>

  );
};

export default Navbars;
