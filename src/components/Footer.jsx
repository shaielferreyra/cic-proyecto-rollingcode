import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={3}>
          <h5>Institución Médica</h5>
          <p>Compromiso con la excelencia y la salud cardiovascular.</p>
        </Col>
        <Col md={3}>
          <h5>Contacto</h5>
          <p>Email: academy@rollingcodeschool.com</p>
          <p>Tel: +54 381 578-3030</p>
        </Col>
        <Col md={3}>
          <h5>Especialidades</h5>
          <p>Cardiología | Cirugía Cardiovascular | Ecocardiografía</p>
        </Col>
      </Row>
      <hr className="mt-4" />
      <p className="text-center">© 2025 Clinica Integral de Cardiologia, CIC. Todos los derechos reservados.</p>
    </Container>
  </footer>
  );
};

export default Footer;