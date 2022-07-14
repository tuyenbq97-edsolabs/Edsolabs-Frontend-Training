import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(47, 43, 43, 0.397);
  }
`;

export const TitleFooterStyled = styled(Card.Text)`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  color: #555770;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const CardTextStyled = styled(Card.Text)`
  color: #1c1c28;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
