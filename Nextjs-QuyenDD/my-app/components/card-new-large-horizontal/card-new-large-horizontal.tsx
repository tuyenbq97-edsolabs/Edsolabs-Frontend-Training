import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { StyledSubCategoryName } from '../card-new-large/styled';
import styled from 'styled-components';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
interface CardNewLargeHorizontalProps {
  newsCard: CardNewItem;
}
const StyledCardLargeY = styled(Card.Img)`
  min-height: 300px;
  object-fit: cover;
  flex: 1 1 0%;
  border-radius: 4px;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px);
`;
const StyledCardTitleLocalNew = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
`;
export default function CardNewLargeHorizontal({
  newsCard,
}: CardNewLargeHorizontalProps) {
  return (
    <div className="text-decoration-none">
      <Card className="d-flex flex-row border-0">
        <div className="mb-0 me-0 me-sm-3">
          <StyledCardLargeY variant="top" src={newsCard.imageUrl} />
        </div>

        <StyledSubCategoryName>
          {newsCard.subCategory.name}
        </StyledSubCategoryName>
        <Card.Body className=" ms-3 ms-sm-0 pt-3 ps-0 pe-0 pb-0">
          <StyledCardTitleLocalNew>{newsCard.title}</StyledCardTitleLocalNew>
          <Card.Text>{newsCard.shortDescription}</Card.Text>

          <StyledCardTextHeader>
            {newsCard.source} -{' '}
            {moment(newsCard.publishDate).format('MMM DD YYYY')}{' '}
          </StyledCardTextHeader>
        </Card.Body>
      </Card>
    </div>
  );
}
