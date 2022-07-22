import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { StyledSubCategoryName } from '../card-new-large/styled';
import styled from 'styled-components';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
interface CardNewLargeYProps {
  newsCardLargeY: CardNewItem;
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
export default function CardNewLargeY({ newsCardLargeY }: CardNewLargeYProps) {
  return (
    <div className="text-decoration-none">
      <Card className="d-flex flex-row border-0">
        <div className="mb-0 me-0 me-sm-3">
          <StyledCardLargeY
            variant="top"
            src={newsCardLargeY.imageUrl}
          ></StyledCardLargeY>
        </div>

        <StyledSubCategoryName>
          {newsCardLargeY.subCategory.name}
        </StyledSubCategoryName>
        <Card.Body className=" ms-3 ms-sm-0 pt-3 ps-0 pe-0 pb-0">
          <StyledCardTitleLocalNew>
            {newsCardLargeY.title}
          </StyledCardTitleLocalNew>
          <Card.Text>{newsCardLargeY.shortDescription}</Card.Text>

          <StyledCardTextHeader>
            {newsCardLargeY.source} -{' '}
            {moment(newsCardLargeY.publishDate).format('MMM DD YYYY')}{' '}
          </StyledCardTextHeader>
        </Card.Body>
      </Card>
    </div>
  );
}
