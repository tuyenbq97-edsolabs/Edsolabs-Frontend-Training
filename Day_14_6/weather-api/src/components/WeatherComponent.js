import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

function WeatherComponent({ info, listWeather }) {
  return (
    <div className="d-flex justify-content-center h-100">
      <Card className="Card h-100">
        <Card.Img
          className="Weather-icon"
          variant="top"
          src={info.day.condition.icon}
        />
        <Card.Body>
          <Card.Title>
            {listWeather.location.name}, {listWeather.location.country}
          </Card.Title>
          <Card.Text>
            Time: {moment(listWeather.location.localtime).format('LT')}
          </Card.Text>
          <Card.Text>Date: {info.date}</Card.Text>
          <Card.Text>Status: {info.day.condition.text}</Card.Text>
          <Card.Text>Max Temperature: {info.day.maxtemp_c} °C</Card.Text>
          <Card.Text>Min Temperature: {info.day.mintemp_c} °F</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WeatherComponent;
