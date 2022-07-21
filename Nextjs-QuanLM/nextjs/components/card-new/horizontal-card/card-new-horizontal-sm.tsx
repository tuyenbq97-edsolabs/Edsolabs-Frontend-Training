import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { CardStyled, TitleFooterStyled } from '../vertical -card/style';
import { CardHorizontalProps } from './card-new-horizontal-lg';
import { theme } from '../../../utils/theme';

const CardImgHorizontalStyled = styled(Card.Img)`
  max-height: 70px;
  max-width: 105px;
  margin-right: 19px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
`;
export const CardHorizontalStyled = styled(CardStyled)`
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const CardTextStyled = styled(Card.Text)`
  color: ${theme.black};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

function CardNewHorizontalSmall({ news }: CardHorizontalProps) {
  return (
    <div className="d-flex-start justify-content-center">
      <CardHorizontalStyled className="border-0 m-0">
        <CardImgHorizontalStyled variant="top" src={news.imageUrl} />
        <Card.Body className="p-0">
          <div className="d-flex align-items-center">
            <TitleFooterStyled>{news.source} - </TitleFooterStyled>
            <TitleFooterStyled>
              {moment(news.publishDate).format('MMM DD YY')}
            </TitleFooterStyled>
          </div>
          <CardTextStyled className=" ">{news.shortDescription}</CardTextStyled>
        </Card.Body>
      </CardHorizontalStyled>
    </div>
  );
}

export default CardNewHorizontalSmall;
