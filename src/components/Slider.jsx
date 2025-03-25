import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/sliderclinic.jpg";
import slider2 from "../assets/slidermedic.jpg";
import slider3 from "../assets/sliderconsultorio.jpg";
import "../App.css";

const Slider = () => {
  return (
    <Carousel>
      
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={slider1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid " src={slider2} alt="Slide 2" />                    
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid"src={slider3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
