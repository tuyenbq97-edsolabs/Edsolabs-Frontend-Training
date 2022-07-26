import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { StyledSubCategoryName } from '../card-new-large/styled';
import styled from 'styled-components';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
import { StyledCardTextSecond, StyledCardTitle } from '../card-new/styled';
interface CardNewLargeHorizontalProps {
  newsCard: CardNewItem;
}
const StyledCardLargeY = styled(Card.Img)`
  height: 250px;
  object-fit: cover;
`;
const StyledCardBody = styled(Card.Body)`
  flex: 1;
`;
const StyledCardHead = styled.div`
  flex: 1;
`;
export default function CardNewLargeHorizontal({
  newsCard,
}: CardNewLargeHorizontalProps) {
  return (
    <Card className="d-flex  flex-lg-row flex-column position-relative border-0">
      <StyledCardHead className="mb-0 me-0 me-lg-3 position-relative">
        <StyledCardLargeY variant="top" src={newsCard.imageUrl} />
      </StyledCardHead>

      <StyledSubCategoryName>{newsCard.subCategory.name}</StyledSubCategoryName>
      <StyledCardBody className="py-lg-0 py-2 ms-3 ms-sm-0 px-0">
        <StyledCardTitle className="overflow-hidden">
          {newsCard.title}
        </StyledCardTitle>
        <StyledCardTextSecond className="overflow-hidden">
          {newsCard.shortDescription}
        </StyledCardTextSecond>

        <StyledCardTextHeader>
          {newsCard.source} -{' '}
          {moment(newsCard.publishDate).format('MMM DD YYYY')}{' '}
        </StyledCardTextHeader>
      </StyledCardBody>
    </Card>
  );
}
