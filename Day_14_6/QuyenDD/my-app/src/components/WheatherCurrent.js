import React from 'react';
import { Card } from 'react-bootstrap';
// import PropsTypes from 'prop-types'
export default function WheatherCurrent({ wheatherData }) {
  return (
    <div className="mt-3 d-flex justify-content-center align-item-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="wheather-icon"
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
