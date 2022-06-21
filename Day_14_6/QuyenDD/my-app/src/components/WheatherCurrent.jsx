import React from 'react';
import { Card } from 'react-bootstrap';

export default function WheatherCurrent({ wheatherData }) {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <Card className="card">
        <Card.Img
          className="w-50"
          variant="top"
          src={wheatherData.current.condition.icon}
        />
        <Card.Body>
          <Card.Text>Thành phố : {wheatherData.location.name}</Card.Text>
          <Card.Text>Quốc gia : {wheatherData.location.country}</Card.Text>
          <Card.Text>
            Độ C: {Math.round(wheatherData.current.temp_c)}&deg;C{' '}
          </Card.Text>
          <Card.Text>
            Độ F: {Math.round(wheatherData.current.temp_f)}&deg;F
          </Card.Text>
          <Card.Text>Thời gian : {wheatherData.location.localtime}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
