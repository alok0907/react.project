import React, { Component } from "react";
import slide1 from "../assets/img/slides/slide.jpg";
import slide2 from "../assets/img/slides/slide2.jpg";
import slide3 from "../assets/img/slides/slide3.jpg";
import Carousel from "react-bootstrap/Carousel";

export class Slides extends Component {
  render() {
    return (
      <>
        <Carousel fade pause="false">
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
