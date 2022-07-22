import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import {
  StyledCardBodyLarge,
  StyledImgCardNewLarge,
  StyledSubCategoryName,
} from './styled';
import { StyledCard, StyledCardTextSecond } from '../card-new/styled';
import moment from 'moment';
import { StyledCardTextHeader } from '../../containers/top-stories-container';

interface CardNewLargeProps {
  newsCardLarge: CardNewItem;
}
export default function CardNewLarge({ newsCardLarge }: CardNewLargeProps) {
  return (
    <StyledCard>
      <StyledImgCardNewLarge
        className="position-relative"
        src={newsCardLarge.imageUrl}
        variant="top"
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
