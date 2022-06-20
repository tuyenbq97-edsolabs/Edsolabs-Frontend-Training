import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
export default function WheatherNextFiveDays({ wheatherData, data }) {
  return (
    <div>
      <h2 className="m-3 text-center">Three Days Wheather</h2>
      <Row>
        {data !== 'undefined' &&
          data.map((item, idx) => (
            <Col key={idx} className="p-5 mb-5" md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  className="wheather-icon"
                  variant="top"
                  src={data[idx].day.condition.icon}
                />
                <Card.Body>
                  <Card.Text>Thời gian : {data[idx].date}</Card.Text>

                  <Card.Text>
                    Độ C : {Math.round(data[idx].day.avgtemp_c)}&deg;C
                  </Card.Text>

                  <Card.Text>
                    Độ F : {Math.round(data[idx].day.avgtemp_f)}&deg;F
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
