import React from 'react';
import { Form, Button } from 'react-bootstrap';

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Search({ setCity, city, getWheather }) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mt-5"
          placeholder="Enter City ..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWheather}
        />
      </Form>
    </div>
  );
}
