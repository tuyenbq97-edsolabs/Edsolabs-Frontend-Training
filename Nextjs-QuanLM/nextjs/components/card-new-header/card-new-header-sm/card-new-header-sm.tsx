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

const CardHeaderSmStyled = styled(CardHeaderStyled)``;

const CardImgLgStyled = styled(Card.Img)`
  height: 300px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;

  @media screen and (max-width: 1200px) {
    height: 264px;
  }
`;
interface CardNewHeaderProp {
  newsHeaderSm: CardNewItem;
}

export default function CardNewHeaderSm({ newsHeaderSm }: CardNewHeaderProp) {
  return (
    <CardHeaderSmStyled role="button">
      <SubCategoryNameStyled>
        {newsHeaderSm.subCategory.name}
      </SubCategoryNameStyled>
      <CardImgLgStyled variant="top" src={newsHeaderSm.imageUrl} />
      <CardBodyStyled>
        <CardTextStyled>
          {newsHeaderSm.source} {' - '}
          {moment(newsHeaderSm.publishDate).format('DD MMM YYYY')}
        </CardTextStyled>
        <CardTitleStyled>{newsHeaderSm.title}</CardTitleStyled>
      </CardBodyStyled>
    </CardHeaderSmStyled>
  );
}
