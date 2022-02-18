import React, { Component } from "react";
import slide1 from "../assets/img/slides/slide.jpg";
import slide2 from "../assets/img/slides/slide2.jpg";
import slide3 from "../assets/img/slides/slide3.jpg";
import Carousel from "react-bootstrap/Carousel";

const heading = {
  color: "yellow",
  fontWeight: "bolder",
};
const para = {
  color: "white",
  fontWeight: "bolder",
};

export class Slides extends Component {
  render() {
    return (
      <>
        <Carousel fade pause="false">
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            {/* <Carousel.Caption className="d-none d-md-block">
              <h1 style={heading}>Houses</h1>
              <p style={para}>Get your dream house</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
            {/* <Carousel.Caption className="d-none d-md-block">
              <h1 style={heading}>Luxury Interiors</h1>
              <p style={para}>Live the Modern Life</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
            {/* <Carousel.Caption className="d-none d-md-block">
              <h1 style={heading}>Apartment</h1>
              <p style={para}>Get the best Apartment </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
