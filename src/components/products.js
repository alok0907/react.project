import React, { Component } from 'react';
import '../assets/css/custom.css';

//import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import velvet from '../assets/img/cards/velvet2.jpg';
import paper from '../assets/img/cards/paper.jpg';
import wooden from '../assets/img/cards/wooden.jpg';

export class Products extends Component {
  render() {
    return (
        <>
            <Container>
                <Row className='mx-4 py-3 my-lg-0 px-lg-5 ms-lg-5'>
                    <Col className='col-md-6 col-lg-4 py-3'>
                        <Card border="success" bg="info" text="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={velvet} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bolder'>Velvet Pencils</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-dark text-light text-center'>
                                <small>Learn more...</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    
                    <Col className='col-md-6 col-lg-4 py-3'>
                        <Card border="success" bg="success" text="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={paper} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bolder'>Paper Pencils</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-dark text-light text-center'>
                                <small>Learn more...</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col className='col-md-6 col-lg-4 py-3'>
                        <Card border="success" bg="warning" text="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={wooden} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bolder'>Wooden Pencils</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-dark text-light  text-center'>
                                <small>Learn more...</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
  }
}

