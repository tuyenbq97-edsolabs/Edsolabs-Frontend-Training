import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCardBodyLarge = styled(Card.Body)`
  text-align: left;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: rgb(28, 28, 40);
  opacity: 0.8;
`;
export const StyledSubCategoryName = styled.span`
  padding: 3px 15px;
  color: #555770;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 4px;
  font-size: 12px;
  font-family: 'Lato Bold';
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
export const StyledImgCardNewLarge = styled(Card.Img)`
  border-radius: 4px;
  min-height: 292px;
  max-height: 292px;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px;
`;
export const StyledCardText = styled(Card.Text)`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Lato Regular';
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
