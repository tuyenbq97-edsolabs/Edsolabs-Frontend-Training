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
import { StyledCard } from '../card-new/styled';

interface CardNewGlobalLargeProps {
  newsCardGlobalLarge: CardNewItem;
}
const StyledCardGlobalLarge = styled(Card.Img)`
  min-height: 600px;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px);
`;
export default function CardNewGlobalLarge({
  newsCardGlobalLarge,
}: CardNewGlobalLargeProps) {
  return (
    <StyledCard className="ms-2">
      <StyledCardGlobalLarge
        className="position-relative"
        variant="top"
        src={newsCardGlobalLarge.imageUrl}
      />
      <StyledSubCategoryName>
        {newsCardGlobalLarge.subCategory.name}
      </StyledSubCategoryName>
      <StyledCardBodyLarge>
        <StyledCardTextHeader>
          {newsCardGlobalLarge.source} -{' '}
          {moment(newsCardGlobalLarge.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>

        <StyledCarouseTitle className="text-truncate text-nowrap overflow-hidden">
          {newsCardGlobalLarge.title}
        </StyledCarouseTitle>
        <StyledCarouseSubTitle className="text-truncate text-nowrap overflow-hidden">
          {newsCardGlobalLarge.shortDescription}
        </StyledCarouseSubTitle>
      </StyledCardBodyLarge>
    </StyledCard>
  );
}
