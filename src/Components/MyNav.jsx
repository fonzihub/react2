import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home" className="ps-3 ">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto pe-3">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNav;
