import { Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar className="custom-navbar nav-container" expand="lg">
      <Navbar.Brand href="#root">Katila</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#awards">Awards</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
