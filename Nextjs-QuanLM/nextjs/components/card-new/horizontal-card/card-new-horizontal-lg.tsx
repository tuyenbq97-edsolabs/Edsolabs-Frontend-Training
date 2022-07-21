import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {
  SubCategoryNameStyled,
  CardTitleStyled,
} from '../../card-new-header/card-new-header-sm/style';
import { CardImgStyled, CardNewItem } from '../vertical -card/card-new';
import {
  CardStyled,
  CardTextStyled,
  TitleFooterStyled,
} from '../vertical -card/style';

const CardImgHorizontalStyled = styled(Card.Img)`
  max-height: ${(props) => props.customheight || '300px'};
  object-fit: cover;
  border-radius: 4px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  @media only screen and (max-width: 992px) {
    max-height: 200px;
    border-radius: 4px;
  }
  @media only screen and (max-width: 867px) {
    max-height: 100%;
  }
`;

export const CardHorizontalStyled = styled(CardStyled)`
  flex-direction: row;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
  &:hover {
    img {
      box-shadow: 0px 2px 4px rgba(47, 43, 43, 0.597);
    }
  }
`;

export const CardHorizontalTitleStyled = styled(CardTitleStyled)`
  white-space: normal;
`;

export interface CardHorizontalProps {
  news: CardNewItem;
  customheight?: string;
}

function CardNewHorizontalLarge({ news, customheight }: CardHorizontalProps) {
  return (
    <div className="d-flex justify-content-center" role="button">
      <CardHorizontalStyled className="border-0">
        <SubCategoryNameStyled>{news.subCategory.name}</SubCategoryNameStyled>
        <CardImgHorizontalStyled
          defaultValue="@default"
          customheight={customheight}
          variant="top"
          src={news.imageUrl}
        />
        <Card.Body>
          <CardHorizontalTitleStyled className="mb-3">
            {news.title}
          </CardHorizontalTitleStyled>
          <CardTextStyled className="mb-4 ">
            {news.shortDescription}
          </CardTextStyled>

          <div className="position-absolute bottom-0">
            <TitleFooterStyled>{news.source}</TitleFooterStyled>

            <TitleFooterStyled>
              {moment(news.publishDate).format('MMM DD YY')}
            </TitleFooterStyled>
          </div>
        </Card.Body>
      </CardHorizontalStyled>
    </div>
  );
}

export default CardNewHorizontalLarge;
