import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Task from './Task';
export default function TasksList({ tasks }) {
  return (
    <Col className="w-100">
      {tasks &&
        tasks.map((item, idx) => (
          <Row className="w-100" key={idx}>
            <Task item={item} />
          </Row>
        ))}
    </Col>
  );
}
