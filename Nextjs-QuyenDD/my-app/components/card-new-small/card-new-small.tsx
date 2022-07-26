import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
import {
  StyledCardText,
  StyledSubCategoryName,
} from '../card-new-large/styled';
import { CardNewItem } from '../card-new/card-new';
import { StyledCardTextSecond } from '../card-new/styled';
import {
  StyledCard,
  StyledCardBodySmall,
  StyledImgCardNewSmall,
} from './styled';

interface CardNewSmallProps {
  newsCardSmall: CardNewItem;
}

export default function CardNewSmall({ newsCardSmall }: CardNewSmallProps) {
  return (
    <StyledCard className="border-0 mb-2 me-0">
      <StyledImgCardNewSmall
        className="d-block  position-relative"
        src={newsCardSmall.imageUrl}
        variant="top"
      />
      <StyledSubCategoryName>
        {newsCardSmall.subCategory.name}
      </StyledSubCategoryName>

      <StyledCardBodySmall className="position-absolute text-white">
        <StyledCardTextHeader className="mb-1">
          {moment(newsCardSmall.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>
        <StyledCardText className="text-white overflow-hidden">
          {newsCardSmall.title}
        </StyledCardText>
      </StyledCardBodySmall>
    </StyledCard>
  );
}
