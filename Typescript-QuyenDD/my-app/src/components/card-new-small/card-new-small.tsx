import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { StyledCardTextHeader } from '../../containers/sub-header-container';
import { StyledSubCategoryName } from '../card-new-large/styled';
import { CardNewItem } from '../card-new/card-new';
import { StyledCard, StyledCardTextSecond } from '../card-new/styled';
import { StyledCardBodySmall } from './styled';

interface CardNewSmallProps {
  newsCardSmall: CardNewItem;
}

export default function CardNewSmall({ newsCardSmall }: CardNewSmallProps) {
  return (
    <StyledCard className="border-0 ms-2 mt-1 mb-1">
      <Card.Img
        className="position-relative"
        variant="top"
        src={newsCardSmall.imageUrl}
      />
      <StyledSubCategoryName>
        {newsCardSmall.subCategory.name}
      </StyledSubCategoryName>

      <StyledCardBodySmall>
        <StyledCardTextHeader className="mb-1">
          {moment(newsCardSmall.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>
        <StyledCardTextSecond className="text-white">
          {newsCardSmall.title}
        </StyledCardTextSecond>
      </StyledCardBodySmall>
    </StyledCard>
  );
}
