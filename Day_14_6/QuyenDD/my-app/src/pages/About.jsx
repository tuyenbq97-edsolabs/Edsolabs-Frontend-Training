import React from 'react';
import { Card } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <Card className="card">
        <Card.Img src="https://meta.vn/Data/image/2021/07/14/hinh-anh-hoa-hong-dep-lang-man-1.jpeg" />
        <Card.Body>
          <Card.Title>Đỗ Duy Quyền</Card.Title>
          <Card.Text>Date : 20-06-2000</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
