import styled from 'styled-components';
import { Card } from 'react-bootstrap';
export const StyledCardBodySmall = styled(Card.Body)`
  position: absolute;
  background: #1c1c28;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
`;
export const StyledImgCardNewSmall = styled(Card.Img)`
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  border-radius: 4px;
  min-height: 300px;
  max-height: 300px;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
`;
