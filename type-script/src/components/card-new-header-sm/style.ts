import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { CardStyled } from '../card-new/style';

export const SubCategoryNameStyled = styled.span`
  position: absolute;
  margin-top: 16px;
  margin-left: 16px;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #555770;
  padding: 3px 21px 5px 22px;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 4px;
  z-index: 2;
`;

export const CardBodyStyled = styled(Card.Body)`
  position: absolute;
  bottom: 0;
  background: #1c1c28;
  opacity: 0.8;
  color: white;
  width: 100%;
  border-radius: 4px;
`;
export const CardHeaderStyled = styled(CardStyled)`
  margin-bottom: 0px;
  border: 0;
`;

export const CardTitleStyled = styled(Card.Title)`
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const CardTextStyled = styled(Card.Text)`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
`;
