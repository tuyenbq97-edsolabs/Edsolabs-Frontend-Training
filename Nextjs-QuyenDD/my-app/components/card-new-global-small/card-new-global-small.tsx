import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { StyledSubCategoryName } from '../card-new-large/styled';
import styled from 'styled-components';
import { StyledCardTextFooter } from '../card-new/styled';
interface CardNewsGlobalSmallProps {
  newsCardGlobalSmall: CardNewItem;
}
const StyledCardGlobalSmall = styled(Card.Img)`
  max-height: 200px;
  flex: 1 1 0%;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px);
  object-fit: cover;
`;
const StyledCardTitleGloballNew = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
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
    <div className=" mb-4 text-decoration-none">
      <Card className="d-flex flex-md-row border-0">
        <StyledCardGlobalSmall
          variant="top"
          className="mb-0 me-0 me-md-3 position-relative"
          src={newsCardGlobalSmall.imageUrl}
        />
        <StyledSubCategoryName>
          {newsCardGlobalSmall.subCategory.name}
        </StyledSubCategoryName>
        <Card.Body className="ms-0 px-0 py-md-0">
          <StyledCardTitleGloballNew>
            {newsCardGlobalSmall.title}
          </StyledCardTitleGloballNew>
          <StyledCardTextGloballNew>
            {newsCardGlobalSmall.shortDescription}
          </StyledCardTextGloballNew>
          <StyledCardTextFooter className="m-0 overflow-hidden">
            {newsCardGlobalSmall.source}
          </StyledCardTextFooter>

          <StyledCardTextFooter>
            {moment(newsCardGlobalSmall.publishDate).format(' MMM DD  YYYY')}
          </StyledCardTextFooter>
        </Card.Body>
      </Card>
    </div>
  );
}
