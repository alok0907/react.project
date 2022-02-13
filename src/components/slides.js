import React, { Component } from 'react';
import slide1 from '../assets/img/slides/slide.jpg'
import slide2 from '../assets/img/slides/slide2.jpg'
import Carousel  from 'react-bootstrap/Carousel';

const heading = {
	color: 'yellow',
	fontWeight: 'bolder'
}
const para = {
	color: 'white',
	fontWeight: 'bolder'
}

export class Slides extends Component {
  render() {
    return (
		<>
			<Carousel fade>

				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={slide1}
						alt="First slide"
					/>
					<Carousel.Caption className='d-none d-md-block'>
					<h1 style={heading}>VELETO</h1>
					<p style={para}>We are leading manufacturer of Velvet Pencils</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={slide2}
						alt="Second slide"
					/>

					<Carousel.Caption className='d-none d-md-block'>
						<h1 style={heading}>VELETO</h1>
						<p style={para}>Play and learn with our attractive pencils</p>  
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={slide1}
						alt="Third slide"
					/>
					<Carousel.Caption className='d-none d-md-block'>
					<h1 style={heading}>VELETO</h1>
					<p style={para}>Use our Eco-Friendly Velvet pencils</p>
					</Carousel.Caption>
				</Carousel.Item>

			</Carousel>
		</>	
    )
  }
}