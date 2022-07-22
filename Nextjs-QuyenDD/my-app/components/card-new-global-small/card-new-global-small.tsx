import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { StyledSubCategoryName } from '../card-new-large/styled';
import styled from 'styled-components';
interface CardNewsGlobalSmallProps {
  newsCardGlobalSmall: CardNewItem;
}
const StyledCardGlobalSmall = styled(Card.Img)`
  max-height: 200px;
  flex: 1 1 0%;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px);
`;
const StyledCardTitleGloballNew = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
`;
const StyledCardTextGloballNew = styled(Card.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
`;
export default function CardNewGlobalSmall({
  newsCardGlobalSmall,
}: CardNewsGlobalSmallProps) {
  return (
    <div className="text-decoration-none">
      <Card className="d-flex flex-row border-0">
        <StyledCardGlobalSmall
          variant="top"
          className="mb-0 me-0 me-sm-3 position-relative"
          src={newsCardGlobalSmall.imageUrl}
        ></StyledCardGlobalSmall>
        <StyledSubCategoryName>
          {newsCardGlobalSmall.subCategory.name}
        </StyledSubCategoryName>
        <Card.Body className="ms-3 ms-sm-0 pt-3 ps-0 pe-0 pb-0">
          <StyledCardTitleGloballNew>
            {newsCardGlobalSmall.title}
          </StyledCardTitleGloballNew>
          <StyledCardTextGloballNew>
            {newsCardGlobalSmall.shortDescription}
          </StyledCardTextGloballNew>
          <Card.Text>{newsCardGlobalSmall.source}</Card.Text>
          <Card.Text>
            {moment(newsCardGlobalSmall.publishDate).format('MMM DD YYYY')}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
