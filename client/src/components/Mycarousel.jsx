import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Mycarousel.scss";
const Mycarousel = () => {
  return (
    <Carousel className="carousel" id="carousel">
      <Carousel.Item className="carousel__slide" controls={false}>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/adopted/img/slider-1.jpg.webp"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel__text">
          <span></span>
          <h2>Celine Richardson, 14 yrs. old</h2>
          <h3>NEEDS A CARING PARENTS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            unde impedit, necessitatibus, soluta sit quam minima expedita atque
            corrupti reiciendis.
          </p>
          <button>
            <p>Buttoned collar</p>
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel__slide" controls={false}>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/adopted/img/slider-2.jpg.webp"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel__text">
          <span></span>
          <h2>Celine Richardson, 14 yrs. old</h2>
          <h3>NEEDS A CARING PARENTS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            unde impedit, necessitatibus, soluta sit quam minima expedita atque
            corrupti reiciendis.
          </p>
          <button>
            Buttoned collar
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Mycarousel;
