import React from 'react';
import styled from 'styled-components';
import { CardImgStyled, CardNewItem } from '../card-new/card-new';
import { Card, Carousel } from 'react-bootstrap';
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardTextStyled,
  CardTitleStyled,
  SubCategoryNameStyled,
} from '../card-new-header-sm/style';
import moment from 'moment';

interface CardNewHeaderProp {
  newsHeaderLg: CardNewItem;
}

const ImageStyled = styled(CardImgStyled)`
  object-fit: cover;
  max-height: 232px;
  @media only screen and (min-width: 1400px) {
    max-height: 272px;
  }
  @media only screen and (max-width: 1200px) {
    max-height: 195px;
  }
  @media only screen and (max-width: 992px) {
    max-height: 100%;
  }
`;

export default function CardNewHeaderLg({ newsHeaderLg }: CardNewHeaderProp) {
  return (
    <CardHeaderStyled className="mb-3">
      <SubCategoryNameStyled>
        {newsHeaderLg.subCategory.name}
      </SubCategoryNameStyled>
      <ImageStyled variant="top" src={newsHeaderLg.imageUrl} />
      <CardBodyStyled>
        <CardTextStyled>
          {newsHeaderLg.source} {' - '}
          {moment(newsHeaderLg.publishDate).format('MMM DD YY')}
        </CardTextStyled>
        <CardTitleStyled>{newsHeaderLg.title}</CardTitleStyled>
      </CardBodyStyled>
    </CardHeaderStyled>
  );
}
