import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import {
  StyledCardBodyLarge,
  StyledCardImg,
  StyledSubCategoryName,
} from './styled';
import { StyledCard, StyledCardTextSecond } from '../card-new/styled';
import moment from 'moment';
import { StyledCardTextHeader } from '../../containers/sub-header-container';

interface CardNewLargeProps {
  newsCardLarge: CardNewItem;
}
export default function CardNewLarge({ newsCardLarge }: CardNewLargeProps) {
  return (
    <StyledCard className="ms-2">
      <StyledCardImg
        className="position-relative"
        variant="top"
        src={newsCardLarge.imageUrl}
      />
      <StyledSubCategoryName>
        {newsCardLarge.subCategory.name}
      </StyledSubCategoryName>
      <StyledCardBodyLarge>
        <StyledCardTextHeader className="mb-1">
          {moment(newsCardLarge.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>
        <StyledCardTextSecond className="text-white">
          {newsCardLarge.title}
        </StyledCardTextSecond>
      </StyledCardBodyLarge>
    </StyledCard>
  );
}
