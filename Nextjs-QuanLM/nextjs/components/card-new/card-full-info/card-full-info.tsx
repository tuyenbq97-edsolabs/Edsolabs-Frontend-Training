import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {
  SrouceStyle,
  TitleStyled,
  ShortDescriptionStyled,
} from '../../../containers/template-top-stories';
import { CardNewProps } from '../../../pages';
import {
  CardHeaderStyled,
  SubCategoryNameStyled,
  CardBodyStyled,
  CardTitleStyled,
} from '../../card-new-header/card-new-header-sm/style';
import { CardNewItem } from '../vertical -card/card-new';

const ImageStyled = styled(Card.Img)`
  object-fit: cover;
  height: ${(props) => props.customheight || '600px'};
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    max-height: 350px;
  }
`;

interface CardFullInfoProps {
  news: CardNewItem;
  customheight?: string;
}

function CardFullInfo({ news, customheight }: CardFullInfoProps) {
  return (
    <CardHeaderStyled className="mb-3" role="button">
      <SubCategoryNameStyled>{news.subCategory.name}</SubCategoryNameStyled>
      <ImageStyled
        defaultValue="@default"
        customheight={customheight}
        variant="top"
        src={news.imageUrl}
      />
      <CardBodyStyled>
        <SrouceStyle>{news.source}</SrouceStyle>
        {' - '}
        <SrouceStyle>
          {moment(news.publishDate).format('DD MMM YYYY')}
        </SrouceStyle>
        <TitleStyled>{news.title}</TitleStyled>
        <ShortDescriptionStyled>{news.shortDescription}</ShortDescriptionStyled>
      </CardBodyStyled>
    </CardHeaderStyled>
  );
}

export default CardFullInfo;
