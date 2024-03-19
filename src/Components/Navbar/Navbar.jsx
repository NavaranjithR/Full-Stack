import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import Badge from "react-bootstrap/Badge";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="body fixed-top">
      <Container fluid className="nav" sticky="top">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Books" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CookBooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fiction</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Non-Fiction
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Philosophy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Kids Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Travel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Nav className="d-lg-flex justify-content-end nav-cart">
          <Nav.Link className="navbar-cart">
            <MdOutlineShoppingBag className="cart-icon" />
            <Badge bg="danger" className="nav-cart-count">
              0
            </Badge>
          </Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
