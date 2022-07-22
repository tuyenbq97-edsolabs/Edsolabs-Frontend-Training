import moment from 'moment';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { SubCategoryNameStyled } from '../../card-new-header/card-new-header-sm/style';
import { CardStyled, CardTextStyled, TitleFooterStyled } from './style';

const CardTitleStyled = styled(Card.Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
export const CardImgStyled = styled(Card.Img)`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  max-height: 197px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-height: 264px;
  }
`;
export interface CardNewProps {
  news: CardNewItem;
  isShowName?: string;
}

export interface CardNewItem {
  viewType: string;
  articles: CardNewItem[];
  content: string;
  id: number;
  imageUrl: string;
  title: string;
  shortDescription: string;
  source: string;
  publishDate: string;
  slug: string;
  subCategory: {
    name: string;
  };
  category: {
    name: string;
    icon: string;
    slug: string;
  };
  moreArticles: [
    {
      imageUrl: string;
      title: string;
      slug: string;
    }
  ];
}
export default function CardNew({ news, isShowName }: CardNewProps) {
  return (
    <div className="d-flex justify-content-center h-100" role="button">
      <CardStyled className="border-0">
        <SubCategoryNameStyled>{news.subCategory.name}</SubCategoryNameStyled>
        <CardImgStyled variant="top" src={news.imageUrl} />
        <Card.Body className="p-0 mt-4">
          {isShowName === 'true' && (
            <Card.Text className="text-primary mb-2">
              {news.category.name}
            </Card.Text>
          )}
          <CardTitleStyled className="mb-3">{news.title}</CardTitleStyled>
          <CardTextStyled className="mb-2">
            {news.shortDescription}
          </CardTextStyled>

          <div>
            <TitleFooterStyled>{news.source}</TitleFooterStyled>

            <TitleFooterStyled>
              {moment(news.publishDate).format('MMM DD YYYY')}
            </TitleFooterStyled>
          </div>
        </Card.Body>
      </CardStyled>
    </div>
  );
}
