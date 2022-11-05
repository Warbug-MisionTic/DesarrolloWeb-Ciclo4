import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const AdminWrapper = () => {
    return (
        <>
            <Navbar className="adminNav" variant="light" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: "white" }} as={Link} to="/admin" >Products</Nav.Link>
                        <Nav.Link style={{ color: "white" }} as={Link} to="sales">Sales</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>   
            <Outlet />
        </>    
    );
}

export default AdminWrapper;

