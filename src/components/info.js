import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Info extends Component {
  render() {
    return (
      <Container className="mt-lg-3 mt-md-3 mt-3 mb-0">
        <Row>
          <Col>
            <h1 className="display-6 fw-bold text-center text-danger">
              Singh Builders are here to fulfill your dreams
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary mt-lg-3">
              We deal with clients from all over India.We are the leading
              housing providers. You can contact us for{" "}
              <b>Houses, Apartments</b> and <b>Residential Plots</b>. We deal
              with clients from all over India.We are the leading housing
              providers. You can contact us for <b>Houses, Apartments</b> and{" "}
              <b>Residential Plots</b>.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
