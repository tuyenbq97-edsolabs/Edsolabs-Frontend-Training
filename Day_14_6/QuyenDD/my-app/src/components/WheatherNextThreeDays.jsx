import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
export default function WheatherNextFiveDays({ wheatherData, data }) {
  return (
    <div>
      <h2 className="mb-3 mt-5 text-center">Three Days Wheather</h2>
      <Row>
        {data !== 'undefined' &&
          data.map((item, idx) => (
            <Col key={idx} className="p-5 mb-5" md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  className="w-50"
                  variant="top"
                  src={item.day.condition.icon}
                />
                <Card.Body>
                  <Card.Text>Thời gian : {item.date}</Card.Text>

                  <Card.Text>
                    Độ C : {Math.round(item.day.avgtemp_c)}&deg;C
                  </Card.Text>

                  <Card.Text>
                    Độ F : {Math.round(item.day.avgtemp_f)}&deg;F
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
