
// src/CardItem.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardItem({ img, title, text }) {
  return (
    <Card style={{ width: '18rem', height: '30rem',  margin: '10px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Link to="/"> {/* Remove leading slash to make it relative */}
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
