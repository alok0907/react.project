import React, { Component } from 'react';
import '../assets/css/custom.css';

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'

import velvet from '../assets/img/cards/velvet2.jpg';
import paper from '../assets/img/cards/paper.jpg';
import wooden from '../assets/img/cards/wooden.jpg';

export class Goods extends Component {
  render() {
    return (
        <>

            <div className='para'>
                <h1 className='info'>
                    VELETO Pencils Make Learning More Fun                
                </h1>
                <p>
                    We are the leading manufacturer of Eco-Friendly <b>Velvet pencils</b>. We also manufacture <b>Paper Pencils</b> and <b>Wood Pencils</b>. 
                    We deal with clients from all over India.
                </p>
            </div>
            

            <CardGroup>

                <Card>
                    <Card.Img   
                        variant="top" 
                        src={velvet}
                    />
                    <Card.Body>
                        <Card.Title>Velvet Pencils</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a>Learn more...</a></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img   
                        variant="top" 
                        src={paper}
                    />
                    <Card.Body>
                        <Card.Title>Paper Pencils</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a>Learn more...</a></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img   
                        variant="top" 
                        src={wooden}
                    />
                    <Card.Body>
                        <Card.Title>Wooden Pencils</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a>Learn more...</a></small>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </>
    )
  }
}
