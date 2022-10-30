import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import * as Icon from 'react-feather'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const Navbars = () => {
  const { user, cerrarSesion } = useContext(UserContext);

  return (
    <>
      <Navbar className="navBg" style={{ background: "#000515" }} expand="lg">
        <Container>
          <Navbar.Brand style={{ color: "white" }} as={Link} to="/" >Welcome to Warbug Store</Navbar.Brand>
          <Navbar.Toggle style={{ background: "white" }} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "white" }} as={Link} to="/" >Home</Nav.Link>
              <Nav.Link style={{ color: "white" }} as={Link} to="/about">About</Nav.Link>
              {/* <Nav.Link style={{ color: "white" }} as={Link} to="/products">Products</Nav.Link>
              <Nav.Link style={{ color: "white" }} as={Link} to="/contact">Contact</Nav.Link> */}
              {user && user.rol == 0 && <Nav.Link style={{ color: "white" }} as={Link} to="/admin">Admin</Nav.Link>}
              <Nav.Link style={{ color: "white" }} as={Link} to="/cart"><div className="carrito-icon"><Icon.ShoppingCart className="icon wh-15" /></div></Nav.Link>
              {user ?
                <div className="icon-container"><Icon.UserX onClick={cerrarSesion} className="icon wh-15" /></div>
                :
                <Nav.Link style={{ color: "white" }} as={Link} to="/login"><div><Icon.User className="icon wh-15" /></div></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>

  );
};

export default Navbars;
