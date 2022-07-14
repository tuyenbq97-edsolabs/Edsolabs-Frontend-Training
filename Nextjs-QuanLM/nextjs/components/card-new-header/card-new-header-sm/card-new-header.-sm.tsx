import React from 'react';
import {
  CardImgStyled,
  CardNewItem,
} from '../../card-new/vertical -card/card-new';
import styled from 'styled-components';
import { Card, Carousel } from 'react-bootstrap';
import moment from 'moment';
import { CardStyled } from '../../card-new/vertical -card/style';
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardTextStyled,
  CardTitleStyled,
  SubCategoryNameStyled,
} from './style';

interface CardNewHeaderProp {
  newsHeaderSm: CardNewItem;
}

export default function CardNewHeaderSm({ newsHeaderSm }: CardNewHeaderProp) {
  return (
    <CardHeaderStyled>
      <SubCategoryNameStyled>
        {newsHeaderSm.subCategory.name}
      </SubCategoryNameStyled>
      <CardImgStyled variant="top" src={newsHeaderSm.imageUrl} />
      <CardBodyStyled>
        <CardTextStyled>
          {newsHeaderSm.source} {' - '}
          {moment(newsHeaderSm.publishDate).format('MMM DD YY')}
        </CardTextStyled>
        <CardTitleStyled>{newsHeaderSm.title}</CardTitleStyled>
      </CardBodyStyled>
    </CardHeaderStyled>
  );
}
