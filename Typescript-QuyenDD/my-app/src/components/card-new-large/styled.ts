import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCardBodyLarge = styled(Card.Body)`
  position: absolute;
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
`;
export const StyledSubCategoryName = styled.span`
  padding: 8px 20px;
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
export const StyledCardImg = styled(Card.Img)`
  max-height: 280px;
  object-fit: cover;
`;
