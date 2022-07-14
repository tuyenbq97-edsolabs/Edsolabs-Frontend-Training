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
import { articlesItem } from '../../../pages';

export const ImageStyled = styled(CardImgStyled)`
  object-fit: cover;
  max-height: 261px;
  @media only screen and (max-width: 1400px) {
    max-height: 222px;
  }
  @media only screen and (max-width: 1200px) {
    max-height: 184px;
  }
  @media only screen and (max-width: 992px) {
    max-height: 100%;
  }
`;

interface CardNewHeaderProp {
  newsHeaderLg: articlesItem;
}

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
