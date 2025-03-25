import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";

const CardsSection = () => {
  const cardData = [
    {
      image: "https://www.unc.edu.ar/sites/default/files/2018-04-17-Inauguracion-Guardia-HNC-05.jpg",
      title: "Guardia e Internación",
      text: "Servicio de guardia e internación permanente.",
      details: "Nuestro servicio de guardia e internación cardiológica ofrece atención médica especializada las 24 horas, los 7 días de la semana. Contamos con un equipo de cardiólogos, enfermeros y técnicos altamente capacitados para atender emergencias y brindar cuidados intensivos a pacientes con afecciones cardíacas. Nuestras instalaciones están equipadas con tecnología de vanguardia para el diagnóstico y tratamiento de diversas patologías cardiovasculares, garantizando una atención integral y de calidad.",
    },
    {
      image: "https://www.ucinmedica.com/wp-content/uploads/2020/08/consultorio-medico.jpg",
      title: "Consultorios Medicos",
      text: "Una amplia variedad de especialidades derivadas de la cardiología.",
      details: "Nuestros consultorios médicos especializados en cardiología ofrecen una amplia gama de servicios para el cuidado de tu salud cardiovascular. Contamos con un equipo de cardiólogos altamente calificados y experimentados, quienes brindan atención personalizada y de calidad. Realizamos consultas, evaluaciones, diagnósticos y seguimiento de diversas afecciones cardíacas, utilizando tecnología de vanguardia y un enfoque integral. Tu bienestar es nuestra prioridad.",
    },
    {
      image: "https://www.corachan.com/images/156492/blog_entry.jpg",
      title: "Estudios de Alta Complejidad",
      text: "Estudios programados y de urgencia, Ecodoppler - Camara GAMMA",
      details: "Nuestro centro de cardiología ofrece una gama completa de estudios de alta complejidad para el diagnóstico preciso y el tratamiento efectivo de enfermedades cardiovasculares. Contamos con tecnología de punta y un equipo de especialistas altamente capacitados para realizar pruebas avanzadas como resonancia magnética cardíaca, tomografía computarizada cardíaca, angiografía coronaria, estudios electrofisiológicos y más. Estos estudios nos permiten evaluar la función cardíaca, detectar anomalías y planificar intervenciones precisas, garantizando la mejor atención para tu salud cardiovascular.",
    },
    {
      image: "https://img.europapress.es/fotoweb/fotonoticia_20220330153110_1200.jpg",
      title: "Cardiología Intervencionista",
      text: "Servicio de Cardiología Intervencionista - Hemodinamia.",
      details: "Nuestro servicio de Cardiología Intervencionista ofrece procedimientos mínimamente invasivos para el diagnóstico y tratamiento de enfermedades cardíacas. Contamos con un equipo de cardiólogos intervencionistas altamente especializados y tecnología de vanguardia para realizar angioplastias coronarias, colocación de stents, valvuloplastias y otros procedimientos. Estos tratamientos permiten mejorar el flujo sanguíneo, reparar válvulas dañadas y tratar diversas afecciones cardíacas, con tiempos de recuperación más cortos y menores riesgos para el paciente.",
    },
    {
      image: "https://hitalianomza.com/wp-content/uploads/2024/07/cirugia-1024x576.webp",
      title: "Cirugía Cardiovascular",
      text: "Servicio de Cirugía Cardiovascular - Alta Complejidad.",
      details: "Nuestro servicio de cirugía cardiovascular ofrece soluciones quirúrgicas avanzadas para el tratamiento de enfermedades del corazón y los vasos sanguíneos. Contamos con un equipo de cirujanos cardiovasculares altamente experimentados y especializados en procedimientos como bypass coronario, reparación y reemplazo de válvulas cardíacas, cirugía de aorta y tratamiento de enfermedades congénitas del corazón. Utilizamos técnicas quirúrgicas de vanguardia y tecnología de punta para garantizar resultados óptimos y una recuperación exitosa.",
    },
    {
      image: "https://cardioalianza.org/wp-content/uploads/2024/05/4.-El-Dato-imagen-scaled.jpg",
      title: "Transplantes",
      text: "Equipo multidiciplinario de Transplantes - cardiacos.",
      details: "Nuestro programa de trasplante cardíaco ofrece una opción de tratamiento para pacientes con insuficiencia cardíaca terminal que no responden a otras terapias. Contamos con un equipo multidisciplinario de cirujanos cardiovasculares, cardiólogos, enfermeros y especialistas en trasplante, quienes brindan atención integral desde la evaluación del paciente hasta el seguimiento postoperatorio. Realizamos trasplantes cardíacos con técnicas quirúrgicas avanzadas y un enfoque centrado en el paciente, con el objetivo de mejorar su calidad de vida y prolongar su supervivencia.",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleShowModal = (card) => {
    setSelectedCard(card);
    setModalShow(true);
  };

  return (
    <div
      className="cards-section py-5"
      style={{
        backgroundImage: `url(https://www.clinicasanmiguel.es/wp-content/uploads/2022/04/especialidad-de-cardiologia-pamplona-2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.8)",
      }}
    >
      <Container>
      <Row>
          {cardData.map((card, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card style={{ height: "100%" }}> {/* Aplica el estilo aquí */}
                <Card.Img variant="top" src={card.image} style={{ objectFit: "cover", height: "200px" }} /> {/* Ajusta la altura de la imagen */}
                <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <div style={{ marginTop: "auto" }}> {/* Empuja el botón hacia abajo */}
                    <Button variant="primary" onClick={() => handleShowModal(card)}>
                      Ver más
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedCard?.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardsSection;