import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png';
import carousel3 from '../../assets/carousel3.png';
import carousel4 from '../../assets/carousel4.png';
import '../../css/styles.css'

const myCarousel = () => {
  let time = 5000;
  return (
    <Carousel>
      <Carousel.Item interval={time}>
        <img
          className="d-block"
          src={carousel1}
          alt="Primeiro slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={time}>
        <img
          className="d-block"
          src={carousel2}
          alt="Segundo slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={time}>
        <img
          className="d-block"
          src={carousel3}
          alt="Terceiro slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={time}>
        <img
          className="d-block"
          src={carousel4}
          alt="Quarto slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default myCarousel;
