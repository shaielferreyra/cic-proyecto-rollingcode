import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/LaInstitucion.css"; 

const LaInstitucion = () => {
  return (
    <div className="institucion-container">
      {/* Contenedor transparente oscuro con slider y texto */}
      <div className="institucion-header">
        <div className="content-box">
          <h1>Sobre Nuestra Institución</h1>
          <p>
            El Centro Integral de Cardiología (CIC) es una institución médica especializada en la prevención, 
            diagnóstico y tratamiento de enfermedades cardiovasculares. Nuestro equipo multidisciplinario de 
            cardiólogos, cirujanos cardiovasculares, electrofisiólogos y personal de enfermería altamente capacitado 
            se dedica a brindar atención integral y personalizada a cada paciente.
          </p>
          <p>
            En el CIC, contamos con tecnología de vanguardia para realizar estudios diagnósticos precisos y 
            procedimientos intervencionistas mínimamente invasivos. Nos enfocamos en la prevención cardiovascular 
            a través de programas de educación y rehabilitación cardíaca, así como en el tratamiento de enfermedades 
            cardíacas complejas mediante cirugía cardiovascular de alta especialidad. Nuestro compromiso es mejorar 
            la calidad de vida de nuestros pacientes y ser un referente en el cuidado de la salud cardiovascular.
          </p>

          {/* Slider dentro del contenedor oscuro */}
          <div className="slider-container">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://images.adsttc.com/media/images/56a0/cfaa/e58e/ceb1/5000/0231/large_jpg/AGI_CARDIAC_CLINIC_P_KUWAIT_091015_0000.jpg?1453379472" alt="Primera imagen" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.eldestapeweb.com/eldestape/012025/1736954949611.webp?cw=400&ch=225&extw=jpg" alt="Segunda imagen" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://oem.com.mx/elsoldemexico/img/15489269/1600787267/BASE_LANDSCAPE/480/cirugia%20ilustrativa.webp" alt="Tercera imagen" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Sección de información */}
      <div className="info-section">
        <div className="info-block left">
          <img src="https://www.infobae.com/resizer/v2/IKSDMSX45JF25C5AUNSU733OKI.jpg?auth=ec7d72337ceef733704879888a7cbe6bde0048c87ebd27ff296cd3784ce98b7c&smart=true&width=350&height=197&quality=85" alt="Imagen 1" />
          <div className="text-content">
            <h2>📌 Compromiso con la Salud</h2>
            <p>
              Nuestra institución ha estado comprometida con la excelencia en el cuidado de la salud cardiovascular. 
              Ofrecemos tratamientos de vanguardia con un equipo de especialistas altamente calificados.
            </p>
          </div>
        </div>

        <div className="info-block right">
          <div className="text-content">
            <h2>🏥 Infraestructura Moderna</h2>
            <p>
              Contamos con instalaciones de última tecnología para la atención de nuestros pacientes, garantizando 
              un ambiente seguro y cómodo.
            </p>
          </div>
          <img src="https://images.adsttc.com/media/images/56a0/cfaa/e58e/ceb1/5000/0231/large_jpg/AGI_CARDIAC_CLINIC_P_KUWAIT_091015_0000.jpg?1453379472" alt="Imagen 2" />
        </div>
      </div>
    </div>
  );
};

export default LaInstitucion;