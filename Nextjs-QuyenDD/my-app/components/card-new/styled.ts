import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCardTextFirst = styled(Card.Text)`
  color: #004fc4;
  font-size: 12px;
  font-family: 'Lato Bold';
`;
export const StyledCardTitle = styled(Card.Title)`
  font-size: 20px;
  font-family: 'Lato Bold';
  color: #1c1c28;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
export const StyledCardTextSecond = styled(Card.Text)`
  color: #1c1c28;
  font-size: 16px;
  font-family: 'Lato Regular';
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
export const StyledCardTextFooter = styled(Card.Text)`
  font-size: 12px;
  color: #555770;
  font-family: 'Lato Regular';
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
export const StyledCarImg = styled(Card.Img)`
  object-fit: cover;
  height: 200px;
`;
