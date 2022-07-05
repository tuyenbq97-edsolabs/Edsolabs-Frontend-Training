import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CardNew, {
  CardNewItem,
  CardNewProps,
} from '../components/card-new/card-new';
import { RowStyled } from './header-new-container';

export interface GlobalNewContainerProps {
  setDbNews?: (arg: CardNewItem[]) => void;
  dbNews: CardNewItem[];
}

export default function GlobalNewContainer({
  dbNews,
  setDbNews,
}: GlobalNewContainerProps) {
  return (
    <Container className="p-0">
      <RowStyled>
        {dbNews &&
          dbNews.map((news, idx) => (
            <Col key={idx} md={3}>
              <CardNew news={news} />
            </Col>
          ))}
      </RowStyled>
    </Container>
  );
}
