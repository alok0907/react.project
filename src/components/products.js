import React, { Component } from "react";
import "../assets/css/custom.css";

//import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import home from "../assets/img/cards/home.jpg";
import plot from "../assets/img/cards/plot.jpg";
import apartment from "../assets/img/cards/apartment.jpg";

export class Products extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="mx-4 py-3 my-lg-0 px-lg-5 ms-lg-5">
            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="info"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={home} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    Houses
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark text-light text-center">
                  <small>Learn more...</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="warning"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={plot} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    Residential Plots
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.This content is a little
                    bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark text-light text-center">
                  <small>Learn more...</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="success"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={apartment} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    Apartments
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark text-light  text-center">
                  <small>Learn more...</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
