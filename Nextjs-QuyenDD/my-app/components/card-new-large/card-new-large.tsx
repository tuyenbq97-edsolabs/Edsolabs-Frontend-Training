import React from 'react';
import { CardNewItem } from '../card-new/card-new';
import {
  StyledCardBodyLarge,
  StyledCardText,
  StyledImgCardNewLarge,
  StyledSubCategoryName,
} from './styled';
import moment from 'moment';
import { StyledCardTextHeader } from '../../containers/top-stories-container';
import { Card } from 'react-bootstrap';

interface CardNewLargeProps {
  newsCardLarge: CardNewItem;
}
export default function CardNewLarge({ newsCardLarge }: CardNewLargeProps) {
  return (
    <Card className="border-0">
      <StyledImgCardNewLarge
        className="d-block position-relative"
        src={newsCardLarge.imageUrl}
        variant="top"
      />
      <StyledSubCategoryName>
        {newsCardLarge.subCategory.name}
      </StyledSubCategoryName>
      <StyledCardBodyLarge className="position-absolute p-3 text-white">
        <StyledCardTextHeader className="mb-1">
          {moment(newsCardLarge.publishDate).format('DD MMM YYYY')}
        </StyledCardTextHeader>
        <StyledCardText className="text-white overflow-hidden">
          {newsCardLarge.title}
        </StyledCardText>
      </StyledCardBodyLarge>
    </Card>
  );
}
