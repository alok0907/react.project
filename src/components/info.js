import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Info extends Component {
  render() {
    return (
      <Container className='mt-lg-3 mb-0'>
          <Row>
              <Col>
                  <h1 className="display-6 fw-bold text-center text-danger">
                      VELETO Pencils Make Learning More Fun                
                  </h1> 
              </Col>                    
          </Row>
          <Row>
              <Col>
                  <p className="text-secondary mt-lg-3">
                      We deal with clients from all over India.We are the leading manufacturer of Eco-Friendly <b>Velvet pencils</b>. We also manufacture <b>Paper Pencils</b> and <b>Wood Pencils</b>. 
                      We deal with clients from all over India.We are the leading manufacturer of Eco-Friendly <b>Velvet pencils</b>. We also manufacture <b>Paper Pencils</b> and <b>Wood Pencils</b>. 
                  </p>    
              </Col>
          </Row>
      </Container>
    )
  }
}


