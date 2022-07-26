import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
import { CardNewItem } from '../card-new/card-new';
interface CardNewSmallHorizontalProps {
  newsCard: CardNewItem;
}
const StyledCardSmallY = styled(Card.Img)`
  height: 70px;
  width: 105px;
`;
const StyledCardTextLocalNew = styled(Card.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
`;
export default function CardNewSmallHorizontal({
  newsCard,
}: CardNewSmallHorizontalProps) {
  return (
    <Card className="d-flex flex-row border-0 mb-3">
      <StyledCardSmallY variant="top" src={newsCard.imageUrl} />
      <Card.Body className="py-0">
        <StyledCardTextHeader>
          {newsCard.source} -{' '}
          {moment(newsCard.publishDate).format('MMM DD YYYY')}{' '}
        </StyledCardTextHeader>

        <StyledCardTextLocalNew>
          {newsCard.shortDescription}
        </StyledCardTextLocalNew>
      </Card.Body>
    </Card>
  );
}
