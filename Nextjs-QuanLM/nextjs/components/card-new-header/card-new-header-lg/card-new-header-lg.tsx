import React from 'react';
import styled from 'styled-components';
import {
  CardImgStyled,
  CardNewItem,
} from '../../card-new/vertical -card/card-new';
import { Card, Carousel } from 'react-bootstrap';
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardTextStyled,
  CardTitleStyled,
  SubCategoryNameStyled,
} from '../card-new-header-sm/style';
import moment from 'moment';

export const ImageStyled = styled(Card.Img)`
  object-fit: cover;
  max-height: 284px;
  @media only screen and (max-width: 1400px) {
    max-height: 238px;
  }
  @media only screen and (max-width: 1200px) {
    max-height: 184px;
  }
  @media only screen and (max-width: 992px) {
    max-height: 290px;
  }
`;

interface CardNewHeaderProp {
  newsHeaderLg: CardNewItem;
}

export default function CardNewHeaderLg({ newsHeaderLg }: CardNewHeaderProp) {
  return (
    <CardHeaderStyled className="mb-3" role="button">
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
