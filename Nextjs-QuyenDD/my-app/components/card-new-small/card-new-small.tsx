import moment from 'moment';
import React from 'react';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
import { StyledSubCategoryName } from '../card-new-large/styled';
import { CardNewItem } from '../card-new/card-new';
import { StyledCard, StyledCardTextSecond } from '../card-new/styled';
import { StyledCardBodySmall, StyledImgCardNewSmall } from './styled';

interface CardNewSmallProps {
  newsCardSmall: CardNewItem;
}

export default function CardNewSmall({ newsCardSmall }: CardNewSmallProps) {
  return (
    <StyledCard className="border-0 mb-2">
      <StyledImgCardNewSmall
        className="position-relative"
        src={newsCardSmall.imageUrl}
        variant="top"
      />
      <StyledSubCategoryName>
        {newsCardSmall.subCategory.name}
      </StyledSubCategoryName>

      <StyledCardBodySmall>
        <StyledCardTextHeader className="mb-1">
          {moment(newsCardSmall.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>
        <StyledCardTextSecond className="text-white text-truncate text-nowrap overflow-hidden">
          {newsCardSmall.title}
        </StyledCardTextSecond>
      </StyledCardBodySmall>
    </StyledCard>
  );
}
