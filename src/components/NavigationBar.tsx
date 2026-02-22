import { Nav, Navbar } from "react-bootstrap";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useNavbarScroll } from "../hooks/useNavbarScroll";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export default function NavigationBar() {
  const activeId = useScrollSpy();
  const scrolled = useNavbarScroll(50);

  return (
    <Navbar
      className={`custom-navbar nav-container ${scrolled ? "navbar-scrolled" : ""}`}
      expand="lg"
    >
      <Navbar.Brand href="#root" className="navbar-brand-animated">
        Katila
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          {navItems.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = activeId === sectionId;
            return (
              <Nav.Link
                key={href}
                href={href}
                className={isActive ? "nav-link-active" : ""}
              >
                {label}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
