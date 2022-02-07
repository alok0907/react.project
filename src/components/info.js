import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';

export class Info extends Component {
  render() {
    return (
        <>
            <h1>
                Example heading <Badge bg="secondary">New</Badge>
            </h1>
        </>
    )
  }
}


