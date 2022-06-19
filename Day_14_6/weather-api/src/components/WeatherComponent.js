import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

function WeatherComponent({ info, idx, infoDetails }) {
  return (
    <div className="d-flex justify-content-center h-100">
      <Card className="h-100" style={{ width: '15rem' }}>
        <Card.Img
          className="Weather-icon"
          variant="top"
          src={infoDetails[idx].day.condition.icon}
        />
        <Card.Body>
          <Card.Title>
            {info.location.name}, {info.location.country}
          </Card.Title>
          <Card.Text>
            Time: {moment(info.location.localtime).format('LT')}
          </Card.Text>
          <Card.Text>Date: {infoDetails[idx].date}</Card.Text>
          <Card.Text>Status: {infoDetails[idx].day.condition.text}</Card.Text>
          <Card.Text>
            Max Temperature: {infoDetails[idx].day.maxtemp_c} °C
          </Card.Text>
          <Card.Text>
            Min Temperature: {infoDetails[idx].day.mintemp_c} °F
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WeatherComponent;
