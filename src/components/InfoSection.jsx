import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import infoImage1 from "../assets/imagen2.jpg";   
import infoImage2 from "../assets/imagen1.jpg";
import "../styles/InfoSection.css";

const InfoSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2><strong>35 AÑOS - PRIMERA CIRUGÍA CARDIOVASCULAR</strong></h2>
          <p><strong>El día 03 de Julio, celebramos los 35 años de la primera Cirugía Cardiovascular realizada en nuestra Institución.</strong></p>
          <p className="text-muted">Brindamos con toda la comunidad de la Clinica Cardiologica Integral, pacientes, médicos y empleados, este logro, manteniendo siempre el espíritu de excelencia, servicio y compromiso.</p>
        </Col>
        <Col md={6}>
          <img src={infoImage1} className="img-fluid" alt="Historia 1" />
        </Col>
      </Row>

      <Row className="align-items-center mt-4">
        <Col md={6}>
          <img src={infoImage2} className="img-fluid" alt="Historia 2" />
        </Col>
        <Col md={6}>
          <h2><strong>35 AÑOS DE NUESTRA INSTITUCIÓN</strong></h2>
          <p><strong>Compartimos con Uds. los 35 años de esta Institución 1989-2024</strong></p>
          <p className="text-muted">Brindamos con toda la comunidad de la Clinica Cardiologica Integral, pacientes, médicos y empleados, este logro, manteniendo siempre el espíritu de excelencia, servicio y compromiso.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoSection;