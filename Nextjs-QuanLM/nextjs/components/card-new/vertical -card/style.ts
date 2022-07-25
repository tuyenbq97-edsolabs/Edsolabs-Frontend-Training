import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const CardStyled = styled(Card)`
  margin-bottom: 40px;
`;

export const TitleFooterStyled = styled(Card.Text)`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  color: ${({ theme }) => theme.Neutral_L10};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const CardTextStyled = styled(Card.Text)`
  color: ${({ theme }) => theme.Neutral_L11};

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
