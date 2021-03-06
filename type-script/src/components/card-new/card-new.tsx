import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { SubCategoryNameStyled } from '../card-new-header-sm/style';
import { CardStyled, CardTextStyled, TitleFooterStyled } from './style';

const CardTitleStyled = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
export interface CardNewProps {
  news: CardNewItem;
}
export interface CardNewItem {
  id: number;
  imageUrl: string;
  title: string;
  shortDescription: string;
  source: string;
  publishDate: string;
  subCategory: {
    name: string;
  };
  category: {
    name: string;
  };
}

export const CardImgStyled = styled(Card.Img)`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
`;

export default function CardNew({ news }: CardNewProps) {
  return (
    <div className="d-flex justify-content-center h-100">
      <CardStyled className="border-0">
        <SubCategoryNameStyled>{news.subCategory.name}</SubCategoryNameStyled>
        <CardImgStyled variant="top" src={news.imageUrl} />
        <Card.Body>
          <Card.Text className="text-primary">{news.category.name}</Card.Text>
          <CardTitleStyled className="mb-3">{news.title}</CardTitleStyled>
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
      </CardStyled>
    </div>
  );
}
