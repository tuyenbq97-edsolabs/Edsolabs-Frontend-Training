import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCard = styled(Card)`
  margin-bottom: 40px;
`;
export const StyledCardTextFirst = styled(Card.Text)`
  color: #004fc4;
  font-size: 12px;
  font-family: 'Lato Bold';
`;
export const StyledCardTitle = styled(Card.Title)`
  font-size: 20px;
  font-family: 'Lato Bold';
  color: #1c1c28;
`;
export const StyledCardTextSecond = styled(Card.Text)`
  color: #1c1c28;
  font-size: 16px;
  font-family: 'Lato Regular';
  @media screen and (max-width: 376px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const StyledCardTextFooter = styled(Card.Text)`
  font-size: 12px;
  color: #555770;
  font-family: 'Lato Regular';
`;
