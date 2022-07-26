import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCardBodySmall = styled(Card.Body)`
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const StyledImgCardNewSmall = styled(Card.Img)`
  border-radius: 4px;
  min-height: 300px;
  max-height: 300px;
  overflow: hidden;
  background-size: cover;
  /* object-fit: cover; */
  background-position: center center;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px;
`;
export const StyledCard = styled(Card)`
  &:nth-child(1) {
    margin-right: 12px;
  }
`;
