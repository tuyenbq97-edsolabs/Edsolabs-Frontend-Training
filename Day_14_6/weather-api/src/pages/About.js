import React from 'react';
import { Card } from 'react-bootstrap';
import MyImg from '../img/Me.jpg';

function About() {
  return (
    <Card className="Card h-100">
      <Card.Img className="AboutMe" variant="top" src={MyImg} />
      <Card.Body>
        <Card.Title>Quan La Manh</Card.Title>
        <Card.Text>8/1/2001</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
