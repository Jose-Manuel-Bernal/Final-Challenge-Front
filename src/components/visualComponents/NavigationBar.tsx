import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Store Inventory</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
            <Nav.Link as={Link} to="/bill">
              Bill
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/provider">
              Provider
            </Nav.Link>
            <Nav.Link as={Link} to="/receipt">
              Receipt
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
