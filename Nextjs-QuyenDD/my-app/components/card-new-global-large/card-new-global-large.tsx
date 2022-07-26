import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {
  StyledCardTextHeader,
  StyledCarouseSubTitle,
  StyledCarouseTitle,
} from '../../containers/top-stories-container';
import {
  StyledCardBodyLarge,
  StyledSubCategoryName,
} from '../card-new-large/styled';
import { CardNewItem } from '../card-new/card-new';

interface CardNewGlobalLargeProps {
  newsCardGlobalLarge: CardNewItem;
}
const StyledCardGlobalLarge = styled(Card.Img)`
  min-height: 600px;
  object-fit: cover;
`;
export default function CardNewGlobalLarge({
  newsCardGlobalLarge,
}: CardNewGlobalLargeProps) {
  return (
    <Card className=" mb-3 mb-lg-0 border-0">
      <StyledCardGlobalLarge
        className="d-block position-relative"
        variant="top"
        src={newsCardGlobalLarge.imageUrl}
      />
      <StyledSubCategoryName>
        {newsCardGlobalLarge.subCategory.name}
      </StyledSubCategoryName>
      <StyledCardBodyLarge className="position-absolute">
        <StyledCardTextHeader className=" mb-1">
          {newsCardGlobalLarge.source} -{' '}
          {moment(newsCardGlobalLarge.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>

        <StyledCarouseTitle className="mb-2 text-truncate text-nowrap overflow-hidden">
          {newsCardGlobalLarge.title}
        </StyledCarouseTitle>
        <StyledCarouseSubTitle className="mb-0 text-truncate text-nowrap overflow-hidden">
          {newsCardGlobalLarge.shortDescription}
        </StyledCarouseSubTitle>
      </StyledCardBodyLarge>
    </Card>
  );
}
