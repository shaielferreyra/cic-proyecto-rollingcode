import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [showContacto, setShowContacto] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", checkAuthStatus);
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage")); // 🔹 Notifica cambios al Navbar
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Clínica Cardiológica Integral</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/la-institucion">La Institución</Nav.Link>
              <NavDropdown title="Especialidades" id="especialidades-dropdown">
                <NavDropdown.Item as={Link} to="/especialidad-cardiologia">
                  Cardiología
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/especialidad-cirugia">
                  Cirugía Cardiovascular
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/especialidad-ecocardiografia">
                  Ecocardiografía
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={() => setShowContacto(true)}>Contacto</Nav.Link>

              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">Inicio de Sesión</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal de Contacto */}
      <Modal show={showContacto} onHide={() => setShowContacto(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Teléfono:</strong> +54 381 578-3030</p>
          <p><strong>Email:</strong> academy@rollingcodeschool.com</p>
          <p><strong>Dirección:</strong> General Paz 576, Piso 9, Oficina 2
          San Miguel de Tucumán</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowContacto(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarComponent;